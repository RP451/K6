import http from 'k6/http';
import { sleep } from 'k6';

export const options = {

  vus: 10,

  stages: [
    { duration: '30s', target: 20 },
    //{ duration: '1m30s', target: 10 },
    //{ duration: '20s', target: 0 },
  ],
  thresholds:{
    http_req_duration: ['avg<100'],
  },
};

// The function that defines VU logic.
//
// See https://grafana.com/docs/k6/latest/examples/get-started-with-k6/ to learn more
// about authoring k6 scripts.
//
export default function() {
  http.get('https://test.k6.io');
  sleep(1);
}
