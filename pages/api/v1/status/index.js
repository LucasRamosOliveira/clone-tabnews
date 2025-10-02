function status(request, response) {
  response.status(200).json({ chave: "Esse é o valor enviado" });
}

export default status;
