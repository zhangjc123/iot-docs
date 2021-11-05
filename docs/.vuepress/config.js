module.exports = {
    title: 'IOT飞思物联平台',
    description: '功能使用',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    },
    //base: "/bar/",
    head: [
        ['link', { rel: 'icon', href: '/feisjy.ico' }]
    ],
    themeConfig: {
        nav: [   //导航
            { text: '官网', link: 'http://iot.feisjy.com/assets/', target:'_self', rel:'' },
            { text: "使用文档", link: '/document/#编写目的'}
        ],
        sidebar: {

            '/file/': [
                {
                    title: "引言",
                    collapsable: false,
                    children:[
                        ['Purpose-of-preparation', '编写目的'],
                        ['background', '背景'],
                        ['reference-material', '参考资料']
                    ]
                },{
                    title: "用途",
                    collapsable: false,
                    children:[
                        ['function', '功能'],
                        ['performance', '性能'],
                        ['Security', '安全保密']
                    ]
                },{
                    title: "运行环境",
                    collapsable: false,
                    children:[
                        ['browser-tj', '浏览器推荐'],
                        ['yj-equipment', '硬件设备'],
                        ['zc-software', '支持软件']
                    ]
                },{
                    title: "使用过程",
                    collapsable: false,
                    children:[
                        ['object', '操作界面中主要对象使用说明'],
                        ['instructions', '使用说明']
                    ]
                }
        ],
            '/document/': ["","purpose","operating-environment","use-process"]

        }
    }
}
