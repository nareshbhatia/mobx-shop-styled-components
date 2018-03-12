import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

// const styles = theme => ({
//     success: {
//         fontWeight: theme.typography.fontWeightMedium
//     },
//     error: {
//         color: theme.palette.error[500],
//         fontWeight: theme.typography.fontWeightMedium
//     },
//     close: {
//         width: theme.spacing.unit * 4,
//         height: theme.spacing.unit * 4
//     }
// });

@observer
export class ResultPanel extends React.Component {
    static propTypes = {
        result: PropTypes.object.isRequired
    };

    render() {
        // const { classes, result } = this.props;
        // return (
        //     <Snackbar
        //         anchorOrigin={{
        //             vertical: 'bottom',
        //             horizontal: 'center'
        //         }}
        //         open={result.message && result.message.length > 0}
        //         autoHideDuration={10000}
        //         onClose={this.handleClose}
        //         message={
        //             <span
        //                 className={
        //                     result.code ? classes.error : classes.success
        //                 }
        //             >
        //                 {result.message}
        //             </span>
        //         }
        //     />
        // );
        return null;
    }

    handleClose = () => {
        const { result } = this.props;
        result.clear();
    };
}
