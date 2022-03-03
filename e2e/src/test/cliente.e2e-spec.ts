import { AppPage } from '../app.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { ClientePage } from '../page/cliente/cliente.po';
import { ProductoPage } from '../page/producto.po';

describe('workspace-project Cliente', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let productos: ProductoPage;
  let cliente: ClientePage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    productos = new ProductoPage();
    cliente = new ClientePage();
  });

  it('Deberia listar clientes', () => {
    page.navigateTo();
    navBar.clickBotonProductos();
    productos.clickBotonClientes();
    cliente.clickBotonListarClientes();

    expect(cliente.contarClientes()).toBeGreaterThan(0);
  });
});
