import React, { useState, useEffect } from "react";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import blue from "@material-ui/core/colors/blue";

import ListAltIcon from "@material-ui/icons/ListAlt";
import { useParams, Route } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import UpdateIcon from "@material-ui/icons/Update";
import MenuAdmin from "../../../components/menu-admin";

import api from "../../../services/api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
const drawerWidth = 240;
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);
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

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);
export default function MinhasEmpresasLista({ titlePage }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let { id } = useParams();

  const [empresas, setEmpresas] = useState([]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const bluecor = blue[500]; // #f44336

  useEffect(() => {
    async function loadEmpresas() {
      const representante = await api.get("/representante/" + id);
      const response = await api.get(
        `admin/representante/${id}/minhas-empresas`
      );
      setEmpresas(response.data);
    }

    loadEmpresas();
  }, []);
  async function handleDelete(id) {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      let result = await api.delete("representante/" + id);
      if (result.status === 200) {
        window.location.href = "/admin/representante";
      }
    }
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MenuAdmin titlePage="Empresas Cadastradas" />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Paper className={classes.contentPages}>
          <Grid container>
            <h2>Empresas</h2>
            <Grid xs={12}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Razão Social</StyledTableCell>
                      <StyledTableCell align="left">Estado</StyledTableCell>
                      <StyledTableCell align="left">
                        Nome Respon.
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        Telefone Respon.
                      </StyledTableCell>
                      <StyledTableCell align="left">Status</StyledTableCell>
                      <StyledTableCell align="right">Acoes</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {empresas.map((row, index) => (
                      <StyledTableRow key={row._id}>
                        <StyledTableCell component="th" scope="row">
                          {row.razao_social}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.estado}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.nome_responsavel}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.phone}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.statuspedido}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            className={classes.button}
                            startIcon={<ListAltIcon />}
                            href={`/admin/empresa/detalhe/${id}`}
                          >
                            Detalhes
                          </Button>
                          <Button
                            spacing={2}
                            variant="contained"
                            color="cyan"
                            size="small"
                            className={classes.button}
                            startIcon={<UpdateIcon />}
                            href={
                              "/admin/representante/editar-representante/" +
                              row._id
                            }
                          >
                            Editar
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </div>
  );
}
