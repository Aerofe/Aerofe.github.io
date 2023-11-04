d3.csv('https://raw.githubusercontent.com/Aerofe/data/main/data/Marry.csv').then(
    res => {
        drawScatter(res);
    }
);

function drawScatter(res){
    let myGraph = document.getElementById('myGraph');
    let trace1 = {};
    trace1.mode = "lines+markers";
    trace1.type = "scatter";
    trace1.name = "桃園區";
    trace1.x = [];
    trace1.y = [];
    for(let i=0;i<res.length;i++){
        trace1.x[i] = i+1;
        trace1.y[i] = res[0][i+1+'月'];
    }
    let trace2 = {};
    trace2.mode = "lines+markers";
    trace2.type = "scatter";
    trace2.name = "中壢區";
    trace2.x = [];
    trace2.y = [];
    for(let i=0;i<res.length;i++){
        trace2.x[i] = i+1;
        trace2.y[i] = res[1][i+1+'月'];
    }
    let trace3 = {};
    trace3.mode = "lines+markers";
    trace3.type = "scatter";
    trace3.name = "大溪區";
    trace3.x = [];
    trace3.y = [];
    for(let i=0;i<res.length;i++){
        trace3.x[i] = i+1;
        trace3.y[i] = res[2][i+1+'月'];
    }
    let trace4 = {};
    trace4.mode = "lines+markers";
    trace4.type = "scatter";
    trace4.name = "楊梅區";
    trace4.x = [];
    trace4.y = [];
    for(let i=0;i<res.length;i++){
        trace4.x[i] = i+1;
        trace4.y[i] = res[3][i+1+'月'];
    }

    let trace5 = {};
    trace5.mode = "lines+markers";
    trace5.type = "scatter";
    trace5.name = "蘆竹區";
    trace5.x = [];
    trace5.y = [];
    for(let i=0;i<res.length;i++){
        trace5.x[i] = i+1;
        trace5.y[i] = res[4][i+1+'月'];
    }

    let trace6 = {};
    trace6.mode = "lines+markers";
    trace6.type = "scatter";
    trace6.name = "大園區";
    trace6.x = [];
    trace6.y = [];
    for(let i=0;i<res.length;i++){
        trace6.x[i] = i+1;
        trace6.y[i] = res[5][i+1+'月'];
    }

    let trace7 = {};
    trace7.mode = "lines+markers";
    trace7.type = "scatter";
    trace7.name = "龜山區";
    trace7.x = [];
    trace7.y = [];
    for(let i=0;i<res.length;i++){
        trace7.x[i] = i+1;
        trace7.y[i] = res[6][i+1+'月'];
    }

    let trace8 = {};
    trace8.mode = "lines+markers";
    trace8.type = "scatter";
    trace8.name = "八德區";
    trace8.x = [];
    trace8.y = [];
    for(let i=0;i<res.length;i++){
        trace8.x[i] = i+1;
        trace8.y[i] = res[7][i+1+'月'];
    }

    let trace9 = {};
    trace9.mode = "lines+markers";
    trace9.type = "scatter";
    trace9.name = "龍潭區";
    trace9.x = [];
    trace9.y = [];
    for(let i=0;i<res.length;i++){
        trace9.x[i] = i+1;
        trace9.y[i] = res[8][i+1+'月'];
    }

    let trace10 = {};
    trace10.mode = "lines+markers";
    trace10.type = "scatter";
    trace10.name = "平鎮區";
    trace10.x = [];
    trace10.y = [];
    for(let i=0;i<res.length;i++){
        trace10.x[i] = i+1;
        trace10.y[i] = res[9][i+1+'月'];
    }

    let trace11 = {};
    trace11.mode = "lines+markers";
    trace11.type = "scatter";
    trace11.name = "新屋區";
    trace11.x = [];
    trace11.y = [];
    for(let i=0;i<res.length;i++){
        trace11.x[i] = i+1;
        trace11.y[i] = res[10][i+1+'月'];
    }

    let trace12 = {};
    trace12.mode = "lines+markers";
    trace12.type = "scatter";
    trace12.name = "觀音區";
    trace12.x = [];
    trace12.y = [];
    for(let i=0;i<res.length;i++){
        trace12.x[i] = i+1;
        trace12.y[i] = res[11][i+1+'月'];
    }

    let trace13 = {};
    trace13.mode = "lines+markers";
    trace13.type = "scatter";
    trace13.name = "復興區";
    trace13.x = [];
    trace13.y = [];
    for(let i=0;i<res.length;i++){
        trace13.x[i] = i+1;
        trace13.y[i] = res[12][i+1+'月'];
    }

    let layout = {
        margin:{
            t:0
        },
        updatemenus:[ 
            {
                y:1.2,
                x:0.3,
                yanchor:'top', 
                buttons:[ 
                {
                    method:'restyle',
                    args:['visible',[ true, false, false,false,false,false,false,false,false,false,false,false,false]],
                    label:'桃園區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, true ,false,false,false,false,false,false,false,false,false,false,false]],
                    label: '中壢區' 
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true ,false,false,false,false,false,false,false,false,false,false]],
                    label: '大溪區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false,false, true ,false,false,false,false,false,false,false,false,false]],
                    label: '楊梅區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false,false,false, true ,false,false,false,false,false,false,false,false]],
                    label: '蘆竹區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false,false,false,false, true ,false,false,false,false,false,false,false]],
                    label: '大園區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false,false,false,false,false, true ,false,false,false,false,false,false]],
                    label: '龜山區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false,false,false,false,false,false, true ,false,false,false,false,false]],
                    label: '八德區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false,false,false,false,false,false,false, true ,false,false,false,false]],
                    label: '龍潭區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false,false,false,false,false,false,false,false, true ,false,false,false]],
                    label: '平鎮區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false,false,false,false,false,false,false,false,false, true ,false,false]],
                    label: '新屋區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false,false,false,false,false,false,false,false,false,false, true ,false]],
                    label: '觀音區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false,false,false,false,false,false,false,false,false,false,false, true ]],
                    label: '復興區'
                },
                {
                    method: 'restyle',
                    args: ['visible', [true,true,true,true,true,true,true,true,true,true,true,true,true]],
                    label: 'Display All'
                }
                ]
            }
        ]      
    };
    let data = [trace1,trace2,trace3,trace4,trace5,trace6,trace7,trace8,trace9,trace10,trace11,trace12,trace13];
    Plotly.newPlot(myGraph, data, layout);
    trace1.visible = true;

    
}
