import { AppPage } from '../app.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { CertificacionPage } from '../page/certificacion/certificacion.po';
import { ProductoPage } from '../page/producto.po';

describe('workspace-project Certificacion', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let productos: ProductoPage;
  let certificacion: CertificacionPage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    productos = new ProductoPage();
    certificacion = new CertificacionPage();
  });

  it('Deberia listar certificaciones', () => {
    page.navigateTo();
    navBar.clickBotonProductos();
    productos.clickBotonClientes();
    certificacion.clickBotonListarCertificaciones();

    expect(certificacion.contarCertificaciones()).toBeGreaterThan(0);
  });
});
