import React from 'react';
import { inject, observer } from 'mobx-react';
import {
    BackButton,
    BusyIndicator,
    HeaderLayout,
    ItemInfo,
    ItemOrder,
    ItemPhoto,
    ScrollingContent
} from 'shared/components';

// const styles = theme => ({
//     item: {
//         display: 'flex',
//         flexDirection: 'row',
//         padding: theme.spacing.unit * 2
//     }
// });

@inject('rootStore')
@observer
export class ItemPage extends React.Component {
    render() {
        const { classes, rootStore } = this.props;
        const { isLoading, selectedItem: item } = rootStore.itemStore;

        return (
            <HeaderLayout NavButton={BackButton}>
                <ScrollingContent>
                    {isLoading ? (
                        <BusyIndicator />
                    ) : (
                        <div className={classes.item}>
                            <ItemPhoto photo={item.photo} />
                            <ItemInfo item={item} />
                            <ItemOrder rootStore={rootStore} item={item} />
                        </div>
                    )}
                </ScrollingContent>
            </HeaderLayout>
        );
    }
}
