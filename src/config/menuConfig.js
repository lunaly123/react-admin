const menuList = [
    {
        title: '首页',
        key: '/home'
    },
    {
        title: '商品',
        key: '/form',
        children: [
            {
                title: '商品管理',
                key: '/form/login',
            },
            {
                title: '品类管理',
                key: '/form/reg',
            }
        ]
    },
    {
        title: '订单',
        key: '/table',
        children: [
            {
                title: '订单管理',
                key: '/table/basic',
            }
        ]
    },
    {
        title: '用户',
        key: '/rich',
        children: [
            {
                title: '用户管理',
                key:''
            }
        ]
    }
];
export default menuList;