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
// @ts-check
// NOTE: This file is intentionally .jsx, so that there is one file in this repo where we make sure .jsx files work.

import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 24,
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 74 31"
    >
      <g>
        <g transform="translate(329.8 270.2)">
          <path
            fill="#696566"
            d="M-320.6-267c-0.9-1.9-3.1-2.8-5.1-1.9c-2,0.9-2.8,3.2-1.9,5.1l8.6,18.6c1.3,2.9,2.8,4.5,5.4,4.5
			c2.9,0,4.1-1.7,5.4-4.5c0,0,7.5-16.3,7.6-16.5c0.1-0.2,0.3-0.7,1.1-0.7c0.6,0,1.2,0.5,1.2,1.2v15.9c0,2.5,1.4,4.5,4,4.5
			c2.6,0,4-2,4-4.5v-13c0-2.5,1.8-4.1,4.3-4.1c2.5,0,4.1,1.7,4.1,4.1v13c0,2.5,1.4,4.5,4,4.5c2.6,0,4-2,4-4.5v-13
			c0-2.5,1.8-4.1,4.2-4.1c2.5,0,4.1,1.7,4.1,4.1v13c0,2.5,1.4,4.5,4,4.5c2.6,0,4-2,4-4.5V-260c0-5.5-4.4-9.3-9.7-9.3
			c-5.3,0-8.6,3.6-8.6,3.6c-1.8-2.3-4.2-3.6-8.3-3.6c-4.3,0-8.1,3.6-8.1,3.6c-1.8-2.3-4.7-3.6-7.2-3.6c-3.8,0-6.9,1.7-8.7,5.9
			l-5.5,12.9L-320.6-267z"
          />
        </g>
      </g>
    </svg>
  );
};

export default LogoIcon;
