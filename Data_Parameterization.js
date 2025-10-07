import http from 'k6/http';
import {SharedArray} from 'k6/data';

const users=  new SharedArray('users',function(){
    return[
        {username:'testuser1', password:'testpass1'},
        {username:'testuser2', password:'testpass2'},
        {username:'testuser3', password:'testpass3'},
        {username:'testuser4', password:'testpass4'},
        {username:'testuser5', password:'testpass5'},
    ];
});

export default function () {
  const user = users[__VU % users.length];

  http.post('https://test.k6.io/login', {
    username: user.username,
    password: user.password,
  });
}
