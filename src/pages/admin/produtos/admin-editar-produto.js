import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { useParams, Route } from "react-router-dom";
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

export default function AdminEditarProduto({ titlePage }) {
  const classes = useStyles();
  let { id } = useParams();
  const { control, handleSubmit } = useForm();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [name_product, setNomeProduto] = React.useState("");
  const [description, setDescricao] = React.useState("");
  const [price, setPreco] = React.useState(0);
  const [nameImage, setImagem] = React.useState(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function updateProduto() {
      const response = await api.get("/produto/" + id);
      setNomeProduto(response.data.name_product);
      setDescricao(response.data.description);
      setPreco(response.data.price);
      setImagem(response.data.nameImage);
      // console.log(response.data.name_product);
    }

    updateProduto();
  }, []);

  async function onSubmit(data) {
    // let nameImage = data.nameImage[0];
    const enviardados = {
      id: data._id,
      name_product: data.name_product,
      description: data.description,
      price: data.price,
      nameImage: data.nameImage
    };

    try {
      const response = await api.put("/produto/atualizar/" + id, enviardados);
      if (response.status === 200) {
        alert("Produto atualizado com sucesso");
        window.location.href = "/admin/produtos/";
      } else {
        alert("erro ao cadastrar produto");
      }
    } catch (err) {}
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAdmin titlePage="Editar produto" />
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
                defaultValue={name_product}
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
                defaultValue={description}
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
                defaultValue={price}
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
                defaultValue={nameImage}
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: "40px" }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit">Atualizar Produto</Button>
            </Grid>
          </Grid>
        </form>
      </main>
    </div>
  );
}
