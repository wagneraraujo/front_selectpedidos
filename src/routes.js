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
          path="/admin/produtos/editar-produto"
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
          path="/admin/representante/cadastro-representante"
          exact
          component={AdminCadastroRepresentante}
        />
        <Route
          path="/admin/representante/editar-representante"
          exact
          component={AdminEditarRepresentante}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
