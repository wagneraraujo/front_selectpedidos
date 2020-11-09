import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import MenuAdmin from "../../../components/menu-admin";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import UpdateIcon from "@material-ui/icons/Update";
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';

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
  contentPages: {
    padding: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
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
const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);
export default function Dashboard({ titlePage }) {
const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [representantes, setRepresentantes] = useState([]);

  useEffect(() => {
    async function loadUsuarios() {
      const response = await api.get("/representantes");
      setRepresentantes(response.data.representantes);
    }

    loadUsuarios();
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
    <>  
  <CssBaseline />
  <div>
      <MenuAdmin titlePage="Painel Representantes" />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Paper className={classes.contentPages}>
          <Grid container>
              <h2>Todos os representantes</h2>
            <Grid xs={12}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Nome Representante</StyledTableCell>
                      <StyledTableCell align="left">Email</StyledTableCell>
                      <StyledTableCell align="left">Estado</StyledTableCell>
                      <StyledTableCell align="left">Telefone</StyledTableCell>
                      <StyledTableCell align="right">Opcoes</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {representantes.map((row, index) => (
                      <StyledTableRow key={row._id}>
                        <StyledTableCell component="th" scope="row">
                          {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.email}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.state}
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          {row.phone}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Button
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

                          <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                            onClick={() => handleDelete(row._id)}
                          >
                            Deletar
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
  </>
  )
}
