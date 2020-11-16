import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useForm, Controller } from "react-hook-form";
import MaterialUIInput from "@material-ui/core/Input";

import MenuAdmin from "../../../components/menu-admin";
import Typography from "@material-ui/core/Typography";
import api from "../../../services/api";
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
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

export default function AdminCadastroProduto({ titlePage }) {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // // const [name_product, setNomeProduto] = React.useState("");
  // const [description, setDescricao] = React.useState("");
  // const [price, setPreco] = React.useState(0);
  // const [nameImage, setImagem] = React.useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  async function onSubmit(data) {
    // let nameImage = data.nameImage[0];
    const enviardados = {
      name_product: data.name_product,
      description: data.description,
      price: data.price,
      nameImage: data.nameImage
    };
    console.log(enviardados);
    //   // const response = await api.post("produtos/criar/", dadosProduto);
    try {
      const response = await api.post("/produtos/criar", enviardados);
      if (response.status === 200) {
        alert("Produto cadastrado co msucesso");
        window.location.href = "/admin/produtos/";
      } else {
        alert("erro ao cadastrar produto");
      }
    } catch (err) {
      console.log(err);
    }
  }
  // async function CadastrarProduto(e) {
  //   e.preventDefault();

  //   // let dadosProduto = {
  //   //   name_product,
  //   //   description,
  //   //   price
  //   // };

  //   // const response = await api.post("produtos/criar/", dadosProduto);
  // }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAdmin titlePage="Cadastrar um produto" />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>Preencha os dados do produto </Typography>

        <form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          enctype="multipart/form-data"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Controller
                as={MaterialUIInput}
                control={control}
                label="Nome produto"
                defaultValue=""
                name="name_product"
                placeholder="Nome do produto"
                fullWidth
                variant="outlined"
                className="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                as={MaterialUIInput}
                control={control}
                id="outlined-basic"
                label="Descricao Produto"
                name="description"
                placeholder="Descricao do produto"
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                as={MaterialUIInput}
                control={control}
                id="outlined-basic"
                name="price"
                type="number"
                placeholder="Preco"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>

          <Grid container style={{ marginTop: "40px" }}>
            <Grid item xs={12} sm={6}>
              <Typography>Url do produto</Typography>
              <Controller
                as={MaterialUIInput}
                control={control}
                name="nameImage"
                required
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "40px" }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit">Cadastrar Produto</Button>
            </Grid>
          </Grid>
        </form>
      </main>
    </div>
  );
}
