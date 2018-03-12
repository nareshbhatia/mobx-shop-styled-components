import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
// import { ResultPanel } from 'shared/components';
import { Result } from 'shared/stores';

// const styles = {
//     formControl: {
//         minWidth: 60
//     }
// };

@observer
export class ItemOrder extends React.Component {
    static propTypes = {
        rootStore: PropTypes.object.isRequired,
        item: PropTypes.object.isRequired
    };

    @observable qty = 1;
    @observable result = new Result();

    render() {
        return null;
        // const { classes } = this.props;
        //
        // return (
        //     <div>
        //         <FormControl className={classes.formControl}>
        //             <InputLabel htmlFor="quantity">Qty</InputLabel>
        //             <Select
        //                 value={this.qty}
        //                 onChange={this.handleChange}
        //                 input={<Input name="quantity" id="name" />}
        //             >
        //                 <MenuItem value={1}>1</MenuItem>
        //                 <MenuItem value={2}>2</MenuItem>
        //                 <MenuItem value={3}>3</MenuItem>
        //                 <MenuItem value={4}>4</MenuItem>
        //                 <MenuItem value={5}>5</MenuItem>
        //                 <MenuItem value={6}>6</MenuItem>
        //                 <MenuItem value={7}>7</MenuItem>
        //                 <MenuItem value={8}>8</MenuItem>
        //                 <MenuItem value={9}>9</MenuItem>
        //             </Select>
        //         </FormControl>
        //
        //         <IconButton
        //             color="primary"
        //             className={classes.button}
        //             aria-label="Add to shopping cart"
        //             onClick={this.handleAddToCart}
        //         >
        //             <AddShoppingCartIcon />
        //         </IconButton>
        //
        //         <ResultPanel result={this.result} />
        //     </div>
        // );
    }

    @action
    handleChange = event => {
        this.qty = event.target.value;
    };

    handleAddToCart = () => {
        const { rootStore: { cartStore }, item } = this.props;
        cartStore.addOrder(item, this.qty);
        this.result.set({
            code: null,
            message: `Added ${this.qty} ${item.name}${
                this.qty > 1 ? 's' : ''
            } to the shopping cart`
        });
    };
}
