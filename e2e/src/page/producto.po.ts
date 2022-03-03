import { by, element } from 'protractor';

export class ProductoPage {
  private linkCertificaciones = element(by.id('linkCertificaciones'));
  private linkClientes = element(by.id('linkClientes'));
  private linkExamenes = element(by.id('linkExamenes'));

  async clickBotonClientes() {
    await this.linkClientes.click();
  }

  async clickBotonCertificaciones() {
    return this.linkCertificaciones.click();
  }

  async clickBotonListarExamenes() {
    await this.linkExamenes.click();
  }
}
