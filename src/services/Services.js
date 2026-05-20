const dataSource = require('../models/index.js');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistros() {
    return await dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return await dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dadosDoRegistro) {
    return await dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listaDeRegistrosAtualizados = await dataSource[this.model].update(dadosAtualizados, { where: { id: id } });
    if (listaDeRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async excluiRegistro(id) {
    return await dataSource[this.model].destroy({ where: { id: id } });
  }

}

module.exports = Services;