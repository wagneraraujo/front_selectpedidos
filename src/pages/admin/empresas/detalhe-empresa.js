import React, { useEffect, useState } from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MenuAdmin from "../../../components/menu-admin";
import Paper from "@material-ui/core/Paper";
import { useParams, Route } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import api from "../../../services/api";
import { Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);
const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#fff"
    }
  }
}))(TableRow);
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function Dashboard({ titlePage }) {
  const classes = useStyles();
  const theme = useTheme();
  let { id } = useParams();
  const [open, setOpen] = React.useState(false);

  const [razao_social, setRazasocial] = useState("");
  const [nome_fantasia, setNomefantasia] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setcidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [endereco, setEndeco] = useState("");
  const [cep, setCep] = useState("");
  const [cpnj, seetCpnj] = useState("");
  const [inscricao_estadual, setInscricaoestadual] = useState("");
  const [qtd_funcionarios, setQtdFuncionarios] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [endereco_cobranca, setEnderecocobranca] = useState("");
  const [cidade_cobranca, setCidadeCobranca] = useState("");
  const [estado_cobranca, setEstadoCobranca] = useState("");
  const [telefone_cobranca, setTelefoneCobranca] = useState("");
  const [nome_responsavel, setNomeresponsavel] = useState("");
  const [telefone_responsavel, settelefoneresponsavel] = useState("");
  const [cpf_responsavel, setCpfresponsavvel] = useState("");
  const [email_responsavel, setEmailresponsavel] = useState("");
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");
  const [instituicao, setInstituicao] = useState("");
  const [favorecido, setFavorecido] = useState("");
  const [statuspedido, setStatuspedido] = useState("");
  const [nome_representante, setNomeRepresentante] = useState("");
  const [telefone_representante, setTelefoneRepresentante] = useState("");
  const [email_representante, setEmailrepresentante] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function getDataEmpresa() {
      let response = await api.get("/admin/empresa/detalhe/" + id);

      // setIdRota(response.data.id)

      setRazasocial(response.data.razao_social);
      setNomefantasia(response.data.nome_fantasia);
      setStatuspedido(response.data.statuspedido);
      setEstado(response.data.estado);
      setcidade(response.data.cidade);
      setBairro(response.data.bairro);
      setEndeco(response.data.endereco);
      setCep(response.data.cep);
      seetCpnj(response.data.cpnj);
      setInscricaoestadual(response.data.inscricao_estadual);
      setQtdFuncionarios(response.data.qtd_funcionarios);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setEnderecocobranca(response.data.endereco_cobranca);
      setEstadoCobranca(response.data.estado_cobranca);
      setCidadeCobranca(response.data.cidade_cobranca);
      setTelefoneCobranca(response.data.telefone_cobranca);
      setNomeresponsavel(response.data.nome_responsavel);
      settelefoneresponsavel(response.data.telefone_responsavel);
      setCpfresponsavvel(response.data.cpf_responsavel);
      setEmailresponsavel(response.data.email_responsavel);
      setAgencia(response.data.agencia);
      setConta(response.data.conta);
      setInstituicao(response.data.instituicao);
      setFavorecido(response.data.favorecido);
      setNomeRepresentante(response.data.nome_representante);
      setEmailrepresentante(response.data.email_representante);
      setTelefoneRepresentante(response.data.telefone_representante);
    }
    getDataEmpresa();
  }, []);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAdmin titlePage="Detalhe Empresa" />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <Grid container spacing={2} className={classes.drawerHeader}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <Grid container spacing={2} className={classes.drawerHeader}>
          <Grid item xs={6}>
            <b> Empresa:</b> {nome_fantasia} | {statuspedido}
          </Grid>
          <Grid item xs={6} align="right">
            <Button
              variant="contained"
              color="cyan"
              href="/admin/todas-empresas/"
            >
              Voltar para lista de empresas
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.drawerHeader}>
          <Grid item xs={12} sm={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Razão Social: <strong>{razao_social}</strong>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Nome Fantasia: <strong>{nome_fantasia}</strong>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Estado: <strong>{estado}</strong>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Cidade: <strong>{cidade}</strong>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Bairro: <strong>{bairro}</strong>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      CEP: <strong>{cep}</strong>
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Endereço: <strong>{endereco}</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      CPNJ: <strong>{cpnj}</strong>{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Inscrição Estadual: <strong>{inscricao_estadual}</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Qtd Funcionário: <strong>{qtd_funcionarios}</strong>{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Email: <strong>{email}</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Telefone: <strong>{phone}</strong>{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableCell align="left">
                    Cidade Cobrança: <strong>{cidade_cobranca}</strong>{" "}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    Endereço Cobrança: <strong>{endereco_cobranca}</strong>{" "}
                  </StyledTableCell>
                  <StyledTableRow></StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Estado Cobrança: <strong>{estado_cobranca}</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Telefone Cobrança: <strong>{telefone_cobranca}</strong>{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Nome Responsável: <strong>{nome_responsavel}</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      CPF Responsável: <strong>{cpf_responsavel}</strong>{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Telefone Responsável:{" "}
                      <strong>{telefone_responsavel}</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Email Responsável: <strong>{email_responsavel}</strong>{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Agência: <strong>{agencia}</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Conta: <strong>{conta}</strong>{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell align="left">
                      Nome Banco: <strong>{instituicao}</strong>{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      Favorecido: <strong>{favorecido}</strong>{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow spacing={3}></StyledTableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Grid item xs={12} spacing={3} style={{ marginTop: "60px" }}>
              <Typography variant="h5">Dados do Representante</Typography>
              <Typography variant="p">
                <strong>Nome Representante: </strong>
                {nome_representante}
              </Typography>{" "}
              <br />
              <Typography variant="p">
                <strong>Email Representante: </strong>
                {email_representante}
              </Typography>
              <br />
              <Typography variant="p">
                <strong>Telefone Representante: </strong>
                {telefone_representante}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {/*               <Button color="primary"  href={`/admin/representante/${idrota}/minhas-empresas`} variant="outlined">Voltar para Empresas</Button> */}
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
