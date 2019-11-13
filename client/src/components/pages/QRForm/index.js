import React, { useState } from "react";
import {
    Grid,
    Typography,
    TextField,
    Paper,
    Container,
    Divider,
    Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 2),
        backgroundColor: theme.palette.background.paper
    },
    heroContent: {
        padding: theme.spacing(2, 0, 6)
    },
    divideMargin: {
        marginBottom: "10px"
    },
    button: {
        margin: theme.spacing(1),
    }
}));

const Contact = () => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [client, setClient] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("contact form data:", { client, title, content });
        setTitle("");
        setContent("");
        setClient("");
    };

    return (
        <Container maxWidth="lg">
            <Paper className={classes.paper}>
                <Container maxWidth="sm" component="main" className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Import
					</Typography>
                    <Typography variant="h5" align="center" color="textSecondary" component="p">
                        Submit data for the app by filling out the form.
					</Typography>
                </Container>
                <Divider className={classes.divideMargin} />
                <form onSubmit={handleSubmit}>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="client"
                                    name="client"
                                    value={client}
                                    onChange={(e) => setClient(e.target.value)}
                                    label="Name of client"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="title"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    label="Title of content"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    id="content"
                                    name="content"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    label="Informational text"
                                    fullWidth
                                    multiline={true}
                                    rows={4}
                                    rowsMax={4}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <Grid>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.button}
                            >
                                Submit
							</Button>
                        </Grid>
                    </Container>
                </form>
            </Paper>
        </Container>
    );
};

export default Contact;