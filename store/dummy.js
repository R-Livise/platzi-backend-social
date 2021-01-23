const db = {
  user: [
    {
      id: '1',
      name: 'Rafael',
    },
    {
      id: '2',
      name: 'Bruno',
    },
  ],
};

async function list(table) {
  return db[table];
}
async function get(table, id) {
  let col = await list(table);
  return col.filter(item => item.id === id)[0] || null;
}
async function upset(table, data) {
  db[table].push(data);
}

async function remove(table, id) {
  const col = await list(table);
  const index = col.findIndex(item => item.id === id)[0] || null;

  return index ? col.spice(index, 1) : false;
}

module.exports = {
  list,
  get,
  upset,
  remove,
};
