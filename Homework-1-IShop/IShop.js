let IShop = React.createClass({

    displayName: 'IShop',

    render: function () {

        let shopItemsData = [];
        this.props.shopItems.forEach((item) => {
            let itemDisplay =
                React.DOM.div({key: item.code, className: 'IShop__shop-item_container'},
                    React.DOM.span({className: 'IShop__shop-item_container_item'}, item.itemName),
                    React.DOM.span({className: 'IShop__shop-item_container_item'}, item.itemPrice),
                    React.DOM.span({className: 'IShop__shop-item_container_item'}, item.imgURL),
                    React.DOM.span({className: 'IShop__shop-item_container_item'}, item.inStock),
                );
            shopItemsData.push(itemDisplay);
        })


        return React.DOM.div({className: 'IShop__categories_container'},
            React.DOM.div({className: 'IShop__shop-name'}, this.props.shopName),
            React.DOM.div({className: 'IShop__categories-list'},
                React.DOM.span({className: 'IShop__categories_item'}, "Инструмент"),
                React.DOM.span({className: 'IShop__categories_item'}, "Цена"),
                React.DOM.span({className: 'IShop__categories_item'}, "Изображение"),
                React.DOM.span({className: 'IShop__categories_item'}, "Количество В Наличии"),

                ),
            React.DOM.div({className: 'IShop__shop-name'}, shopItemsData),
        );
    },

});