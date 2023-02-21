Ext.onReady?.(() => {
    new Ext.Panel(<Ext.panel.Panel.Cfg>{
        renderTo: 'main',
        height: 100,
        width: 200,
        title: 'Hello world',
        html: 'Hello Ext!'
    })
});