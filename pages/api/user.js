// pages/api/users.js
import { users } from '../../components/Data';

export default function handle(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { user } = req.body;
    const newUser = {
      id: Date.now(),
      name: user,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
