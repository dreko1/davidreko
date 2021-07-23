import { makeStyles } from '@material-ui/core/styles';

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
      </div>
    );
  }
  
  export default Content;