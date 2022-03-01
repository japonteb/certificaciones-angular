import { AppPage } from '../app.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { CertificacionPage } from '../page/certificacion/certificacion.po';

describe('workspace-project Certificacion', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let certificacion: CertificacionPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    certificacion = new CertificacionPage();
  });

  it('Deberia listar certificaciones', () => {
    page.navigateTo();
    navBar.clickBotonCertificaciones();
    certificacion.clickBotonListarCertificaciones();

    expect(2).toBe(certificacion.contarCertificaciones());
  });
});
