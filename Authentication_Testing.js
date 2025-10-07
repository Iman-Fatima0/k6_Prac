// test5-authentication.js
import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const loginRes = http.post('https://test.k6.io/login', {
    username: 'testuser',
    password: 'testpass',
  });

  const token = loginRes.json('token');
  const params = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };
  http.get('https://test.k6.io/profile', params);
}
