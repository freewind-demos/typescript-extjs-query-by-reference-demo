Ext.onReady(() => {
    new Ext.panel.Panel({
        renderTo: 'main',
        height: 100,
        width: 200,
        title: 'Hello',
        items: [
            new Ext.button.Button({
                text: 'extjs',
            }),
            new Ext.button.Button({
                text: 'typescript',
            })
        ]
    })
});
