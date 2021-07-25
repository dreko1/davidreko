import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    content: {
        textAlign: 'center',
    }
  }));

function About() {  
    const classes = useStyles();

    return (
      <div className={classes.content}>
          <p>About David Reko</p>
      </div>
    );
  }
  
  export default About;