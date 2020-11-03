import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuAdmin from "../../../components/menu-admin";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import api from "../../../services/api";
import { useParams, Route } from "react-router-dom";

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
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [cpf, setCpf] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [stateuser, setStateuser] = React.useState("selecione");
  const [city, setCity] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [typeUser, setTypeUser] = React.useState(1);

  const [error, setError] = React.useState(null);

  let { id } = useParams();

  useEffect(() => {
    async function getDataRepresentante() {
      let response = await api.get("/representante/" + id);
      console.log(response.data);

      setName(response.data.name);
      setLastname(response.data.last_name);
      setCpf(response.data.cpf_cpnj);
      setPhone(response.data.phone);
      setStateuser(response.data.state);
      setCity(response.data.city);
      setEmail(response.data.email);
      setPassword(response.data.password);
      setTypeUser(response.data.type_user);
    }

    getDataRepresentante();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      _id: id,
      type_user: typeUser,
      name: name,
      last_name: lastname,
      cpf_cpnj: parseFloat(cpf),
      email: email,
      phone: parseFloat(phone),
      state: stateuser,
      city: city,
      password: password
    };

    if (
      typeUser !== "" &&
      name !== "" &&
      lastname !== "" &&
      cpf !== "" &&
      email !== "" &&
      phone !== "" &&
      stateuser !== "" &&
      city !== "" &&
      password !== ""
    ) {
      const response = await api.put("/representante/cadastro", data);
      if (response.status === 200) {
        alert("Representante atualizado com sucesso!");
        window.location.href = "/admin/representante";
      } else {
        alert("Erro ao atualizar dados");
      }
    } else {
      alert("Preencha corretamente os campos");
    }
  }

  return (
    <React.Fragment>
      <MenuAdmin titlePage="Atualizar Dados" />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.contentPages}>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            variant="outlined"
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="name_usuario"
                  variant="outlined"
                  label="Seu primeiro Nome"
                  name="name_usuario"
                  fullWidth
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="last_name"
                  name="last_name"
                  variant="outlined"
                  label="Seu sobrenome completo"
                  fullWidth
                  value={lastname}
                  onChange={e => setLastname(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="cpf_cpnj"
                  name="cpf_cpnj"
                  value={cpf}
                  onChange={e => setCpf(e.target.value)}
                  type="number"
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
                  name="phone"
                  fullWidth
                  type="number"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <Select
                  id="state"
                  value={stateuser}
                  variant="outlined"
                  onChange={e => setStateuser(e.target.value)}
                  fullWidth
                  name="stateUser"
                >
                  <MenuItem value="selecione">Seu Estado </MenuItem>
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
                  name="city"
                  variant="outlined"
                  label="Cidade"
                  fullWidth
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email_usuario"
                  variant="outlined"
                  label="Email"
                  name="email_usuario"
                  fullWidth
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="password"
                  variant="outlined"
                  label="Senha"
                  fullWidth
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={4}>
                <Select
                  id="type_user_select"
                  value={typeUser}
                  onChange={e => setTypeUser(e.target.value)}
                  name="type_user"
                  variant="outlined"
                  fullWidth
                >
                  <MenuItem value="type_user">Tipo de usuário</MenuItem>
                  <MenuItem value={1}>Representante</MenuItem>
                  <MenuItem value={2}>Administrador</MenuItem>
                </Select>
              </Grid>
              <Grid item spacing={3}>
                <Button type="submit" variant="contained" color="primary">
                  Atualizar Representante
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}
