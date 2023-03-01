Ext.onReady(() => {
    new Ext.panel.Panel({
        renderTo: 'main',
        height: 100,
        width: 200,
        title: 'Hello',
        viewModel: new Ext.app.ViewModel({
            data: {
                colors: ['red', 'green', 'blue', 'white', 'black']
            }
        }),
        get items() {
            const self = this as Ext.panel.Panel.Cfg;
            return self.viewModel?.data?.colors.map(color => new Ext.button.Button({ text: color }));
        }
    })
});