import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();

/* --- register: post /api/users/register --- */
router.post('/register', async (req, res) => {
  // get the data from the request body
  const { email, username, password } = req.body;

  // 1. check if all fields are there
  if (!email || !username || !password) {
    // 400 means --> 'bad request'
    return res.status(400).json({ message: 'all fields are required' });
  }

  // 2. hashing (scrambling) the password for security
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // 3. create new user in the database
    const newUser = await prisma.user.create({
      data: {
        email: email,
        username: username,
        password: hashedPassword, // store the hashed password
      },
    });

    // 4. send back a success message (don't send the password back!)
    res.status(201).json({ message: 'user created successfully' });

  } catch (error) {
    // this error usually means the email is already taken
    res.status(500).json({ message: 'error creating user' });
  }
});

/* --- login: post /api/users/login --- */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. find the user by their email
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    // 2. if no user is found OR if password doesn't match --> send an error
    if (!user) {
      return res.status(400).json({ message: 'invalid credentials' });
    }

    // 3. check if the incoming password matches the scrambled/hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'invalid credentials' });
    }

    // 4. (success!) user is valid --> create a json web token (jwt)
    const token = jwt.sign(
        { userId: user.id, email: user.email }, // the "payload" or data for the id card
        process.env.JWT_SECRET!, // the secret key from your .env file
        { expiresIn: '1d' } // this token will be valid for 1 day
    );

    // 5. send the token back to the user
    res.status(200).json({
        message: 'login successful',
        token: token,
    });

  } catch (error) {
    res.status(500).json({ message: 'server error during login' });
  }
});

export default router;