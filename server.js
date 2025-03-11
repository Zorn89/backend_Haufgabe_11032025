app.get('/', (req, res) => {
    res.send('Hello world!');
  });
  
  app.get('/content', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Meine HTML-Seite</title>
      </head>
      <body>
        <h1>Willkommen auf meiner Seite!</h1>
        <p>Hier ist etwas Inhalt...</p>
        <ul>
          <li>Punkt 1</li>
          <li>Punkt 2</li>
          <li>Punkt 3</li>
        </ul>
      </body>
      </html>
    `);
  });
  
  app.get('/api/data', (req, res) => {
    const data = {
      fullName: 'Lukas Probst',
      age: 28,
    };
    res.json(data);
  });
  
  app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
  });