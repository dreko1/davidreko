import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    content: {
        textAlign: 'center',
    }
  }));

function Content() {  
    const classes = useStyles();

    return (
      <div className={classes.content}>
          <h1>This will be my personal website!</h1>
          <h2>Still a work in progress!</h2>
          <h3>Coming soon!</h3>
          <Button variant="contained" color="primary" onClick={() => window.open('https://www.linkedin.com/in/davidreko/')}>
            linkedin
          </Button>
      </div>
    );
  }
  
  export default Content;