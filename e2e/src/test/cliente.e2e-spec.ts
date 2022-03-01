import { AppPage } from '../app.po';
import { NavbarPage } from '../page/navbar/navbar.po';
import { ClientePage } from '../page/cliente/cliente.po';

describe('workspace-project Cliente', () => {
  let page: AppPage;
  let navBar: NavbarPage;
  let cliente: ClientePage;

  beforeEach(() => {
    page = new AppPage();
    navBar = new NavbarPage();
    cliente = new ClientePage();
  });

  it('Deberia listar clientes', () => {
    page.navigateTo();
    navBar.clickBotonClientes();
    cliente.clickBotonListarClientes();

    expect(cliente.contarClientes()).toBeGreaterThan(0);
  });
});
