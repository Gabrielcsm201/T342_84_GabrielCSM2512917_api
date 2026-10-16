const supabase = require("../config/database");

async function getFornecedores(req, res, next) {
  try {
    const { data, error } = await supabase.from("fornecedores").select("*");
    if (error) throw error;

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

async function store(req, res, next) {
  if (!req.is("application/json")) {
    return res.status(415).json({
      error: "Envie o fornecedor com Content-Type: application/json."
    });
  }

  if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
    return res.status(400).json({ error: "O corpo deve ser um objeto JSON." });
  }

  const { nome, cnpj, email, telefone } = req.body;

  if (!nome || !cnpj || !email || !telefone) {
    return res.status(400).json({
      error: "nome, cnpj, email e telefone são obrigatórios."
    });
  }

  try {
    const { data, error } = await supabase
      .from("fornecedores")
      .insert({ nome, cnpj, email, telefone })
      .select()
      .single();
    if (error) throw error;

    res.status(201).json(data);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const { data, error } = await supabase
      .from("fornecedores")
      .select("*")
      .eq("id", req.params.id)
      .maybeSingle();
    if (error) throw error;

    if (!data) {
      return res.status(404).json({ error: "Fornecedor não encontrado." });
    }

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = { getFornecedores, store, getById };
