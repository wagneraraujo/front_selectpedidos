import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuAdmin from "../../../components/menu-admin";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  contentPages: {
    padding: theme.spacing(2)
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: +drawerWidth,
    marginTop: 60
  }
}));
export default function AdminRepresentante() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MenuAdmin titlePage="Cadastrar um Representante" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.contentPages}>
          <FormControl
            className={classes.root}
            noValidate
            autoComplete="off"
            variant="outlined"
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="name_usuario"
                  variant="outlined"
                  label="Seu primeiro Nome"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="last_name"
                  variant="outlined"
                  label="Seu sobrenome completo"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="cpf_cpnj"
                  variant="outlined"
                  label="CPF ou CNPJ"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="phone"
                  variant="outlined"
                  label="DDD + Telefone"
                  fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <label htmlFor="" style={{ position: "absolute" }}>
                  Escolha um Estado
                </label>
                <Select
                  id="state"
                  value="Selecione"
                  variant="outlined"
                  onChange=""
                  fullWidth
                >
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
              <Grid item xs={3}>
                <TextField
                  id="city"
                  variant="outlined"
                  label="Cidade"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email_usuario"
                  variant="outlined"
                  label="Email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="password"
                  variant="outlined"
                  label="Senha"
                  fullWidth
                  type="password"
                />
              </Grid>
              <Grid item xs={4}>
                <Select
                  id="type_user_select"
                  value="Tipo de usuario"
                  onChange=""
                  fullWidth
                >
                  <MenuItem value="1">Representante</MenuItem>
                  <MenuItem value="2">Administrador</MenuItem>
                </Select>
              </Grid>
              <Grid item spacing={3}>
                <Button type="submit" variant="contained" color="primary">
                  Cadastrar Representante
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Paper>
      </main>
    </React.Fragment>
  );
}
