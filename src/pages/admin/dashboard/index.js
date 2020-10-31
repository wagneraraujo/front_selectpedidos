import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import MenuAdmin from "../../../components/menu-admin";
import Typography from "@material-ui/core/Typography";

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
export default function Dashboard(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MenuAdmin
        titlePage="Painel Representantes"
        componentPages={props.homeAdminItens}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper className={classes.contentPages}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        </Paper>
      </main>
    </React.Fragment>
  );
}

function homeAdminItens() {
  return (
    <div className="">
      ote: this is a one-way operation. Once you eject, you can’t go back! If
      you aren’t satisfied with the build tool and configuration choices, you
      can eject at any time. This command will remove the single build
      dependency from your project. Instead, it will copy all the configuration
      files and the transitive dependencies (webpack, Babel, ESLint, etc) right
      into your project so you have full control over them. All of the commands
      except eject will still work, but they will point to the copied scripts so
      you can tweak them. At this point you’re on your own. You don’t have to
      ever use eject. The curated feature set is suitable for small and middle
      deployments, and you shouldn’t feel obligated to use this feature. However
      we understand that this tool wouldn’t be useful if you couldn’t customize
      it when you are ready for it.
    </div>
  );
}
