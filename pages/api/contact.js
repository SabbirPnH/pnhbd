// pages/api/contact.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, number, message } = req.body;

    // Log the received data
    console.log('Received data:', { name, email, number, message });

    // Here you can handle the data, for example, save it to a database

    res.status(200).json({ message: 'Request received successfully!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
