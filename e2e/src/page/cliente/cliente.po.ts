import { by, element } from 'protractor';

export class ClientePage {
  private linkListarClientes = element(by.id('linkListarCliente'));
  private listaClientes = element.all(by.css('table tbody tr'));

  async clickBotonListarClientes() {
    await this.linkListarClientes.click();
  }

  async contarClientes() {
    return this.listaClientes.count();
  }
}
