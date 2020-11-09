import React, {useEffect, useState} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import MenuAdmin from "../../../components/menu-admin";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { useParams, Route } from "react-router-dom";
import api from "../../../services/api"

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
        flexGrow: 1,

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Dashboard({titlePage}) {
const classes = useStyles();
  const theme = useTheme();
  let { id } = useParams();
  const [open, setOpen] = React.useState(false);

  const [razao_social , setRazasocial]  = useState('')
	const [nome_fantasia , setNomefantasia] = useState('') 
	const [estado, setEstado] = useState('') 
	const [cidade, setcidade ] = useState('') 
	const [bairro, setBairro ] = useState('') 
	const [endereco, setEndeco ] = useState('') 
	const [cep, setCep ] = useState('') 
	const [cpnj, seetCpnj] = useState('') 
	const [inscricao_estadual, setInscricaoestadual] = useState('') 
	const [qtd_funcionarios, setQtdFuncionarios ] = useState('') 
	const [email, setEmail] = useState('') 
	const [phone, setPhone] = useState('') 
	const [endereco_cobranca, setEnderecocobranca] = useState('') 
  const [cidade_cobranca, setCidadeCobranca] = useState('') 
	const [estado_cobranca, setEstadoCobranca] = useState('') 
	const [telefone_cobranca, setTelefoneCobranca] = useState('') 
	const [nome_responsavel, setNomeresponsavel] = useState('') 
	const [telefone_responsavel, settelefoneresponsavel] = useState('') 
	const [cpf_responsavel, setCpfresponsavvel] = useState('') 
	const [email_responsavel, setEmailresponsavel] = useState('') 
	const [agencia, setAgencia] = useState('') 
	const [conta, setConta] = useState('') 
	const [instituicao, setInstituicao] = useState('') 
	const [favorecido, setFavorecido] = useState('') 
	const [statuspedido, setStatuspedido] = useState('') 


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function getDataEmpresa(){
      let {data} = await api.get("/admin/empresa/detalhe/" + id)
      console.log(data)

      setRazasocial(razao_social)
      setNomefantasia(nome_fantasia)
      setStatuspedido(statuspedido)
      setEstado(estado)
      setcidade(cidade)
      setBairro(bairro)
      setEndeco(endereco)
      setCep(cep)
      seetCpnj(cpnj)
      setInscricaoestadual(inscricao_estadual)
      setQtdFuncionarios(qtd_funcionarios)
      setEmail(email)
      setPhone(phone)
      setEnderecocobranca(endereco_cobranca)
      setEstadoCobranca(estado_cobranca)
      setCidadeCobranca(cidade_cobranca)
      setTelefoneCobranca(telefone_cobranca)
      setNomeresponsavel(nome_responsavel)
      settelefoneresponsavel(telefone_responsavel)
      setCpfresponsavvel(cpf_responsavel)
      setEmailresponsavel(email_responsavel)
      setAgencia(agencia)
      setConta(conta)
      setInstituicao(instituicao)
      setFavorecido(favorecido)


    }
    getDataEmpresa()
  }, [])
  return (
   <div className={classes.root}>
      <CssBaseline />
      <MenuAdmin
        titlePage="Detalhe Empresa"
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Grid container spacing={2} className={classes.drawerHeader}>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
        </Grid>
        <Grid container spacing={2} className={classes.drawerHeader}>
          <Grid item xs={6}>
<Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <b> Empresa:</b> {nome_fantasia} | {statuspedido}
        </Typography>
        <Typography variant="h5" component="h2">
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Dados da Empresa
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>

          </Grid>
          <Grid item xs={6}>item2</Grid>
        </Grid>

      </main>
      </div>
  );
}
