
import React, {useEffect, useState} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import MenuAdmin from "../../../components/menu-admin";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import MenuItem from "@material-ui/core/MenuItem";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
     '& > *': {
      margin: theme.spacing(1),
    },




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

export default function CadastrarEmpresa({titlePage}) {
const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
	const [telefone_cobranca, setTelefoneCobranca] = useState('') 
	const [nome_responsavel, setNomeresponsavel] = useState('') 
	const [telefone_responsavel, settelefoneresponsavel] = useState('') 
	const [cpf_responsavel, setCpfresponsavvel] = useState('') 
	const [email_responsavel, setEmailresponsavel] = useState('') 
	const [agencia, setAgencia] = useState('') 
	const [conta, setConta] = useState('') 
	const [instituicao, setInstituicao] = useState('') 
	const [favorecido, setFavorecido] = useState('') 
	const [nome_representante, setnomerepresentante] = useState('') 
	const [email_representante, setEmailrepresentante] = useState('') 
	const [informacoes_adicionais, setInformacoesadicionais] = useState('') 

  return (
   <div className={classes.root}>
      <CssBaseline />
      <MenuAdmin
        titlePage="Cadastrar Empresa"
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>Cadastre a empresa no formulário abaixo, e aguarde análise pela Select Nutri, não se preocupe, voce será notificado. Preencha corretamente todos os campos.</Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={razao_social}
                  onChange={e => setRazasocial(e.target.value)}
                label="Razão Social" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={nome_fantasia}
                  onChange={e => setNomefantasia(e.target.value)}
                label="Nome Fantasia" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
                <Select
                  id="state"
                  value={estado}
                  variant="outlined"
                  onChange={e => setEstado(e.target.value)}
                  fullWidth
                  name="estado"
                >
                  <MenuItem value="selecione">Selecione Estado </MenuItem>
                  <MenuItem value="AC">Acre</MenuItem>
                  <MenuItem value="AL">Alagoas</MenuItem>
                  <MenuItem value="AP">Amapá</MenuItem>
                  <MenuItem value="AM">Amazonas</MenuItem>
                  <MenuItem value="BA">Bahia</MenuItem>
                  <MenuItem value="CE">Ceará</MenuItem>
                  <MenuItem value="DF">Distrito Federal</MenuItem>
                  <MenuItem value="ES">Espírito Santo</MenuItem>
                  <MenuItem value="GO">Goiás</MenuItem>
                  <MenuItem value="MA">Maranhão</MenuItem>
                  <MenuItem value="MT">Mato Grosso</MenuItem>
                  <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                  <MenuItem value="MG">Minas Gerais</MenuItem>
                  <MenuItem value="PA">Pará</MenuItem>
                  <MenuItem value="PB">Paraíba</MenuItem>
                  <MenuItem value="PR">Paraná</MenuItem>
                  <MenuItem value="PE">Pernambuco</MenuItem>
                  <MenuItem value="PI">Piauí</MenuItem>
                  <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                  <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                  <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                  <MenuItem value="RO">Rondônia</MenuItem>
                  <MenuItem value="RR">Roraima</MenuItem>
                  <MenuItem value="SC">Santa Catarina</MenuItem>
                  <MenuItem value="SP">São Paulo</MenuItem>
                  <MenuItem value="SE">Sergipe</MenuItem>
                  <MenuItem value="TO">Tocantins</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={cidade}
                  onChange={e => setcidade(e.target.value)}
                label="Cidade" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={bairro}
                  onChange={e => setBairro(e.target.value)}
                label="Bairro" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={endereco}
                  onChange={e => setEndeco(e.target.value)}
                label="Endereço" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                value={cep}
                type="number"
                onChange={e => setCep(e.target.value)}
                label="CEP" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={cpnj}
                  onChange={e => seetCpnj(e.target.value)}
                label="CPNJ" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={inscricao_estadual}
                  onChange={e => setInscricaoestadual(e.target.value)}
                label="Inscrição Estadual" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={qtd_funcionarios}
                  onChange={e => setQtdFuncionarios(e.target.value)}
                label="Qtd. Funcionários" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={email}
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                label="Email da Empresa" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={phone}
                  type="number"
                  onChange={e => setPhone(e.target.value)}
                label="DDD + Telefone" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={endereco_cobranca}
                  onChange={e => setEnderecocobranca(e.target.value)}
                label="Endereço para Cobrança" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={cidade_cobranca}
                  onChange={e => setCidadeCobranca(e.target.value)}
                label="Qual Cidade" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={telefone_cobranca}
                  onChange={e => setTelefoneCobranca(e.target.value)}
                label="DDD + telefone" type="number" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={nome_responsavel}
                  onChange={e => setNomeresponsavel(e.target.value)}
                label="Responsável" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={telefone_responsavel}
                  onChange={e => settelefoneresponsavel(e.target.value)}
                label="DDD + Telefone Responsável" ttype="number" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={cpf_responsavel}
                  onChange={e => setCpfresponsavvel(e.target.value)}
                label="CPF do responsável" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={email_responsavel}
                  onChange={e => setEmailresponsavel(e.target.value)}
                label="Email do responsável" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={agencia}
                  onChange={e => setAgencia(e.target.value)}
                label="Agência" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={conta}
                  onChange={e => setConta(e.target.value)}
                label="Conta" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={instituicao}
                  onChange={e => setInstituicao(e.target.value)}
                label="Qual Banco?" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={favorecido}
                  onChange={e => setFavorecido(e.target.value)}
                label="Nome Completo Favorecido" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={nome_representante}
                  onChange={e => setnomerepresentante(e.target.value)}
                label="Nome do Representante" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={email_representante}
                  onChange={e => setEmailrepresentante(e.target.value)}
                label="Email Representante" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4} xl={3}>
              <TextField id=""
                  value={informacoes_adicionais}
                  onChange={e => setInformacoesadicionais(e.target.value)}
                label="" required variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>

                <Button type="submit">Finalizar Cadastro</Button>
            </Grid>
          </Grid>
    </form>
      </main>
      </div>
  );
}
