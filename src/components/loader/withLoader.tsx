import React, { Dispatch, SetStateAction, useState } from 'react';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export interface WithLoaderProps {
  setBusy: Dispatch<SetStateAction<boolean>>;
}

const withLoader = <T,>(WrappedComponent: React.FC<T>) => {
  const ComponentWithLoader: React.FC<T & WithLoaderProps> = props => {
    const classes = useStyles();
    const [busy, setBusy] = useState(false);
    return (
      <>
        <Backdrop className={classes.backdrop} open={busy}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <WrappedComponent {...props} setBusy={setBusy} />
      </>
    );
  };

  return ComponentWithLoader;
};

export default withLoader;
