import { by, element } from 'protractor';

export class NavbarPage {
  linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
  linkCertificacion = element(
    by.xpath('/html/body/app-root/app-navbar/nav/a[2]')
  );
  linkCliente = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
  linkExamen = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

  async clickBotonCertificaciones() {
    await this.linkCertificacion.click();
  }

  async clickBotonClientes() {
    await this.linkCliente.click();
  }

  async clickBotonExamenes() {
    await this.linkExamen.click();
  }
}
