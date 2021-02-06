import { makeStyles, Grid, Paper, Box } from "@material-ui/core";

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: "80vw",
    minHeight: "80vh",
    margin: "auto"
  },
  paper: {
    minHeight: "94vh",
    width: "47vw"
  },
  editor: {
    width: "99%",
    resize: "none",
    border: "1px solid #FAFAFA",
    borderRadius: "20px",
    fontSize: "18px",
    lineHeight: "1.5em"
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className="app">
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" alignItems="center" spacing={2}>
            <Grid item>
              <Paper className={classes.paper}>
                <Box spacing={3}>
                  <textarea
                    id="editor"
                    className={classes.editor}
                    rows="28"
                  ></textarea>
                </Box>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                <div id="preview"></div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
