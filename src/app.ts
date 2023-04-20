Ext.onReady(() => {
    new Ext.panel.Panel({
        renderTo: 'main',
        height: 100,
        width: 200,
        title: 'Hello',
        items: [
            new Ext.button.Button({
                text: 'extjs',
                reference: 'aaa',
                listeners: {
                    click: () => {
                        const button = Ext.ComponentQuery.query('[reference=aaa]')[0];
                        alert(button.text);
                        button.setText('new text ' + Date.now())
                    }
                }
            }),
        ]
    })
});
