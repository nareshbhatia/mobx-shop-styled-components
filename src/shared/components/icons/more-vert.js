import React from 'react';
import pure from 'recompose/pure';
import { SvgIcon } from './svg-icon';

let MoreVert = props => (
    <SvgIcon {...props}>
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </SvgIcon>
);

MoreVert = pure(MoreVert);

export default MoreVert;
