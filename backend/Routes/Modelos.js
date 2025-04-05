router.post('/', (req, res) => {
  const { nombre } = req.body;
  if (!nombre) return res.status(400).json({ error: 'El nombre del modelo es obligatorio' });

  db.run('INSERT INTO modelos (nombre) VALUES (?)', [nombre], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, nombre });
  });
});
