import { by, element } from 'protractor';

export class CertificacionPage {
  private linkListarCertificaciones = element(by.id('linkListarCertificacion'));
  private listaCertificaciones = element.all(by.css('table tbody tr'));

  async clickBotonListarCertificaciones() {
    await this.linkListarCertificaciones.click();
  }

  async contarCertificaciones() {
    return this.listaCertificaciones.count();
  }
}
