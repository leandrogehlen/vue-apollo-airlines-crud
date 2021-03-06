import Lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import mkdirp from 'mkdirp';
import { resolve } from 'path';
import shortid from 'shortid';
import services from '../../src/assets/js/services';

mkdirp(resolve(__dirname, '../../live'));

const db = new Lowdb(new FileSync(resolve(__dirname, '../../live/db.json')));

// Seed an empty DB
db.defaults({
  airlines: [
    {
      id: shortid.generate(),
      iata: 'VY',
      name: 'Vueling',
      primary_color: '#fc0',
      secondary_color: '#666',
      services: [services.checkin.key, services.seats.key],
      active: true,
    },
    {
      id: shortid.generate(),
      iata: 'FR',
      name: 'Ryanair',
      primary_color: '#133590',
      secondary_color: '#f1c931',
      services: [services.bags.key, services.seats.key, services.checkin.key],
      active: true,
    },
  ],
}).write();

export default db;
