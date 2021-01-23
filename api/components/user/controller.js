const TABLE = 'user';
const { nanoid } = require('nanoid');
const user = require('.');

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) store = require('../../../store/dummy');

  function list() {
    let data = store.list(TABLE);

    if (!data) {
      console.error('Error controller User:data vacia');
      return 'La entrada esta vacia';
    }

    return data;
  }

  async function get(id) {
    let user = await store.get(TABLE, id);
    console.log(user);

    if (!user) {
      console.error('Error controller User:data vacia');
      return 'La entrada esta vacia';
    }

    return user;
  }
  function upset(body) {
    if (!body.id) body.id = nanoid;

    const user = {
      id: body.user,
      name: body.name,
    };

    return store.upset(TABLE, user);
  }
  function remove(id) {
    return store.remove(TABLE, id);
  }

  return {
    list,
    get,
    upset,
    remove,
  };
};
