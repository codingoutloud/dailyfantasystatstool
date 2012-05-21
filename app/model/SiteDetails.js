/* Contains details that differ between sites that we need to use in the UI, such as available positions */
Ext.define('DFST.model.SiteDetails', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'pos' }, // array of positions from site
        { name: 'salmin', type: 'int', defaultValue: 0 },
        { name: 'salmax', type: 'int', defaultValue: 10000 },
        { name: 'afpmin', type: 'int', defaultValue: 0 },
        { name: 'afpmax', type: 'int', defaultValue: 20 },
        { name: 'cppmin', type: 'int', defaultValue: 0 },
        { name: 'cppmax', type: 'int', defaultValue: 1500 }        
    ]
});