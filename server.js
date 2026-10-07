const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "CampoGana",
    estado: "Servidor funcionando"
  });
});

app.post("/retiro", (req, res) => {
  const { monto, metodo, cuenta } = req.body;

  if (!monto || !metodo || !cuenta) {
    return res.status(400).json({
      ok: false,
      mensaje: "Faltan datos del retiro"
    });
  }

  res.json({
    ok: true,
    mensaje: "Solicitud de retiro recibida",
    retiro: {
      monto: Number(monto),
      comision: Number(monto) * 0.10,
      recibe: Number(monto) * 0.90,
      metodo: metodo,
      cuenta: cuenta,
      estado: "Pendiente"
    }
  });
});

app.listen(PORT, () => {
  console.log(`CampoGana funcionando en el puerto ${PORT}`);
});