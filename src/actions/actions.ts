'use server'

export interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const createUser = async (data: User) => {
  const res = await fetch('http://localhost:3000/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })
  return res.json()
}