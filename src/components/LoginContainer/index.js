import { Box, Card, CardContent } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((appTheme) => ({
  container: {
    backgroundColor: "rgba(181, 211, 237, 0.14)",
    minHeight: "100vh",
  },
  copyright: {
    textAlign: "center",
    padding: "16px",
  },
  card: {
    maxWidth: "560px",
    width: "560px",
  },
  header: {
    textAlign: "center",
  },
  title: {
    fontSize: "34px",
    fontWeight: "normal",
    lineHeight: "1.24",
    letterSpacing: "0.25px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.87)",
    margin: "0px",
  },
  divider: {
    height: "1px",
    margin: "25px 1px 27px 1px",
    backgroundColor: "#e0e0e0",
  },
  cardContent: {
    padding: "22px 69px 22px 69px",
  },
}));

export function LoginContainer({
  header,
  children,
  title,
}) {
    const classes = useStyles();

  return (
    <Box
      className={classes.container}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div className={classes.header}>
            <h1 className={classes.title}>{title}</h1>
            {header}
          </div>

          <div className={classes.divider}></div>
          {children}
        </CardContent>
      </Card>

      <p className={classes.copyright}>© The Ksquare Group</p>
    </Box>
  );
}
