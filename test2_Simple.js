import http from 'k6/http';
import { sleep } from 'k6';

export const options={
    vus:100000,
    duration:'100000s'
}
export default function()
{
    http.get('https://test.k6.io');
    sleep(1);
}