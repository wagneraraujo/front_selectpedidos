import { BrowserRouter, Switch, Route } from "react-router-dom";
// representante
import Home from "./pages/representante/home";
import detalheProduto from "./pages/representante/produto/detalhe-produto";

//admin
import Dashboard from "./pages/admin/dashboard/";
import AdminProdutos from "./pages/admin/produtos";
import AdminEditarProduto from "./pages/admin/produtos/admin-editar-produto";
import AdminCadastroProduto from "./pages/admin/produtos/admin-cadastro-produto";

//admin representante
import AdminRepresentante from "./pages/admin/representante/";
import AdminCadastroRepresentante from "./pages/admin/representante/admin-cadastro-representantes";
import AdminEditarRepresentante from "./pages/admin/representante/admin-editar-representante";
import LoginRepresentante from "./pages/admin/login";

//minhas empresas
import MinhasEmpresasLista from "./pages/admin/empresas";
import detalheEmpresa from "./pages/admin/empresas/detalhe-empresa";
import CadastrarEmpresa from "./pages/admin/empresas/cadastrar-empresa";
import TodasEmpresasLista from "./pages/admin/empresas/todas-empresas";
import AtualizarEmpresa from "./pages/admin/empresas/atualizar-empresa";

//pedidos
import PedidosSelect from "./pages/admin/pedidos/";
import PrivateRoute from "./services/wAuth";
const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detalheproduto/" exact component={detalheProduto} />

        <Route path="/admin/" exact component={Dashboard} />
        <Route path="/admin/produtos/" exact component={AdminProdutos} />
        <Route
          path="/admin/produtos/cadastro-produtos"
          exact
          component={AdminCadastroProduto}
        />
        <Route
          path="/admin/produtos/editar-produto/:id"
          exact
          component={AdminEditarProduto}
        />

        {/*       representante */}
        <Route
          path="/admin/representante/"
          exact
          component={AdminRepresentante}
        />
        <Route
          path="/representante/login/"
          exact
          component={LoginRepresentante}
        />
        <Route
          path="/admin/representante/cadastro-representante"
          exact
          component={AdminCadastroRepresentante}
        />
        <Route
          path="/admin/representante/editar-representante/:id"
          exact
          component={AdminEditarRepresentante}
        />

        {/* minhas empresas */}
        <Route
          path="/admin/representante/:id/minhas-empresas"
          exact
          component={MinhasEmpresasLista}
        />
        <Route
          path="/admin/empresa/detalhe/:id/"
          exact
          component={detalheEmpresa}
        />
        <Route
          path="/empresa/cadastrar-empresa"
          exact
          component={CadastrarEmpresa}
        />
        <Route
          path="/admin/todas-empresas"
          exact
          component={TodasEmpresasLista}
        />
        <Route
          path="/empresas/atualizar/:id"
          exact
          component={AtualizarEmpresa}
        />

        <Route path="/admin/todos-pedidos" exact component={PedidosSelect} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
