import React from "react";
import { makeStyles, Grid, Paper, Box, TextField } from "@material-ui/core";
import marked from "marked";

import defaultMarkdown from "./sample.md";

import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    width: "100%"
  },
  box: {
    padding: "1em",
    margin: "1em",
    width: "100%"
  },
  editor: {
    width: "95%"
  }
}));

marked.setOptions({
  gfm: true,
  breaks: true
});

export default function App() {
  const [markdown, setMarkdown] = React.useState(defaultMarkdown);
  const editorRef = React.useRef();
  const textFieldRef = React.useRef();
  const classes = useStyles();

  const onEditorChanged = () => {
    setMarkdown(editorRef.current.value);
  };
  const onTextFieldChanged = () => {
    setMarkdown(textFieldRef.current.value);
  };

  return (
    <div className="app">
      <Grid container className={classes.root} spacing={3} margin={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box className={classes.box}>
              <textarea
                id="editor"
                ref={editorRef}
                onChange={onEditorChanged}
                value={markdown}
                hidden
              ></textarea>
              <TextField
                id="editor-textfield"
                className={classes.editor}
                label="Markdown"
                variant="outlined"
                multiline
                rows={20}
                inputRef={textFieldRef}
                onChange={onTextFieldChanged}
                value={markdown}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Box className={classes.box}>
              <div
                id="preview"
                dangerouslySetInnerHTML={{
                  __html: marked(markdown ?? "")
                }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
