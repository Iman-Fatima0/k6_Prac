import http from 'k6/http';
import { sleep } from 'k6';

export const options={
    stages:[
        {duration:'10s', target:10},
        {duration:'20s', target:50},
        {duration:'20s', target:100},
        {duration:'10s', target:0}
    ],
    thresholds:{
        http_req_duration:['p(95)<1000'],
        http_req_failed:['rate<0.02']

    }
}
export default function()
{
    const url ='https://cart.daraz.pk/cart/add';

    const payload = JSON.stringify({
    productId: '09876',
    quantity: 1, });

  const params={
    headers: {'Content-Type': 'application/json'},
  }

  const res = http.post(url, payload, params);

  sleep(1);
    
}