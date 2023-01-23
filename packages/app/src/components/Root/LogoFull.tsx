/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { makeStyles } from '@material-ui/core';
import LogoIcon from './LogoIcon';

const useStyles = makeStyles({
  root: {
    display: 'block',
    width: 185,
    position: 'relative',
  },
  logo: {},
  text: {
    position: 'absolute',
    top: 0,
    right: -10,
    width: 145,
    color: '#222222',
  },
});
const LogoFull = () => {
  const classes = useStyles();

  return (
    <span className={classes.root}>
      <LogoIcon className={classes.logo} />
      <span className={classes.text}>
        VMware Tanzu
        <br />
        <strong>Application Platform</strong>
      </span>
    </span>
  );
};

export default LogoFull;
