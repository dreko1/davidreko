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
          <h1>Still a work in progress!</h1>
          <h1>Coming soon!</h1>
          <Button variant="contained" color="primary" onClick={() => window.open('https://www.linkedin.com/in/davidreko/')}>
            linkedin
          </Button>
      </div>
    );
  }
  
  export default Content;