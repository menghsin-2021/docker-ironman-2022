const app = require('express')();
const cors = require('cors');
const os = require('os');

app.use(cors());

app.get('/', (req, res) => {
  console.log('GET /');
  res.json({
    message: `Hello World from ${os.hostname()} - v1`,
  });
});

app.get('/conferences', (req, res) => {
  console.log('GET /conferences');
  res.json({
    data: [
      {
        id: 1,
        title: 'Web Conf 2023',
        url: 'https://webconf.tw/',
        date: '2023/08/11',
      },
      {
        id: 2,
        title: 'Laravel x Vue Conf Taiwan 2023',
        url: 'https://laravelconf.tw/',
        date: '2023/08/19',
      },
      {
        id: 3,
        title: 'HITCON',
        url: 'https://hitcon.org/2023/CMT/',
        date: '2023/08/18',
      },
      {
        id: 4,
        title: 'PyCon TW',
        url: 'https://tw.pycon.org/2023/zh-hant',
        date: '2023/09/02',
      },
      {
        id: 5,
        title: 'DevOpsDays',
        url: 'https://devopsdays.tw/2023/',
        date: '2023/09/25',
      },
      {
        id: 6,
        title: 'JCConf',
        url: 'https://jcconf.tw/2023/',
        date: '2023/10/06',
      },
      {
        id: 7,
        title: 'Kubernetes Summit 2023',
        url: 'https://k8s.ithome.com.tw/2023/',
        date: '2023/10/25',
      },
      {
        id: 8,
        title: 'MWC 2023',
        url: 'https://modernweb.tw/',
        date: '2023/11/08',
      },
    ],
  });
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res) => {
  console.error(err.message);
  res.sendStatus(500);
});

const server = app.listen(3000, () => {
  console.log('Server is running...');
});

function handle(code) {
  console.debug(`${code} signal received: closing HTTP server`);
  server.close(() => {
    console.debug('HTTP server closed');
  });
}

process.on('SIGTERM', handle);
process.on('SIGINT', handle);
