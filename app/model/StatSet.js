/*

Copyright (c) 2012 Maura Wilder

*/
Ext.define('DFST.model.StatSet', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int', defaultValue: 0 },
        { name: 'team', type: 'string' },
        { name: 'opp', type: 'string' }, //opponent
        { name: 'isHome', type: 'boolean', defaultValue: true },
        { name: 'name', type: 'string' },
        { name: 'lname', type: 'string', defaultValue: '' },
        { name: 'fname', type: 'string', defaultValue: '' },
        { name: 'pos', type: 'string', defaultValue: '' },
        { name: 'ng', type: 'int', defaultValue: 0 },        //number of games played
        
        //hitter stats
        { name: 'x1b', type: 'int', defaultValue: 0 },   //singles
        { name: 'x2b', type: 'int', defaultValue: 0 },   //doubles
        { name: 'x3b', type: 'int', defaultValue: 0 },   //triples
        { name: 'hr', type: 'int', defaultValue: 0 },    //home runs
        { name: 'r', type: 'int', defaultValue: 0 },     //runs scored
        { name: 'rbi', type: 'int', defaultValue: 0 },   //runs batted in
        { name: 'bb', type: 'int', defaultValue: 0 },    //walks
        { name: 'sb', type: 'int', defaultValue: 0 },    //stolen bases
        { name: 'hbp', type: 'int', defaultValue: 0 },   //hit by pitch
        { name: 'o', type: 'int', defaultValue: 0 },     //(calculated as at bats - hits)
        
        //pitcher stats
        { name: 'w', type: 'int', defaultValue: 0 },     //wins
        { name: 'aw', type: 'float', defaultValue: 0.0 },    //average wins
        { name: 'er', type: 'int', defaultValue: 0 },    //earned runs
        { name: 'aer', type: 'float', defaultValue: 0.0 },    //average earned runs/game
        { name: 'so', type: 'int', defaultValue: 0 },    //strike outs
        { name: 'aso', type: 'float', defaultValue: 0.0 },    //average strike outs
        { name: 'ip', type: 'float', defaultValue: 0.0 }, //innings pitched
        { name: 'aip', type: 'float', defaultValue: 0.0 }, //avg. innings pitched
        
        //derived stats
        { name: 'afp', type: 'float', defaultValue: 0.0},  //average fantasy points per game
        
        //site stats
        { name: 'sal', type: 'float', defaultValue: 0.0},  //salary at site
        { name: 'cpp', type: 'float', defaultValue: 0.0},  //cost per point
        { name: 'spos', type: 'string', defaultValue: '' },//position (as site reports it)
        { name: 'inj', type: 'boolean', defaultValue: false},  //whether player is injured?
        { name: 'pp', type: 'boolean', defaultValue: false},  //whether player is probable starter?
        
        { name: 'border', type: 'int', defaultValue: 0},  //batting order if known, else 0
        { name: 'mr1', type: 'int', defaultValue: 0}      //matchup rating
    ]
});
