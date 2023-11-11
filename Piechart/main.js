d3.csv('https://raw.githubusercontent.com/Aerofe/data/main/data/Marry.csv').then(
    res => {
        drawPie(res);
    }
);

function drawPie(res){
    console.log(res);
    let myBar = document.getElementById('myPie');
    let trace1 = {};
    let trace2 = {};

    trace1.type = "pie";
    trace1.labels = [];
    trace1.values = [];
    trace1.opacity = 0.5;
    trace1.domain={
        row:0,
        column:0
    };
    trace1.title="桃園市每個月結婚對數總和占比";
    let labels_row=["1月","2月","3月","4月","5月","6月","7月","8月"];
    let values_row=[1060,1097,1283,651,1433,1053,1085,790];
    
    for(let i=0;i<res.length;i++){
        
        trace1.labels[i] = labels_row[i];
        trace1.values[i] = values_row[i];
    }

    trace2.type = "pie";
    trace2.labels = [];
    trace2.values = [];
    trace2.opacity = 0.5;
    trace2.title="桃園市各區結婚對數總和占比";
    trace2.automargin=true;
    trace2.domain={
        row:0,
        column:1
    };
    let labels_column=[
        '桃園區',
        '中壢區',
        '大溪區',
        '楊梅區',
        '蘆竹區',
        '大園區',
        '龜山區',
        '八德區',
        '龍潭區',
        '平鎮區',
        '新屋區',
        '觀音區',
        '復興區'
        ];
    let values_column=[1731,1559,354,668,579,344,671,777,484,803,153,284,45];
    for(let i=0;i<res.length;i++){
        
        trace2.labels[i] = labels_column[i];
        trace2.values[i] = values_column[i];
    }

    let data=[];
    data.push(trace1);
    data.push(trace2);
    let layout = {
        height: 700,
        width: 700,
        margin:{
            t:10,
            l:0,
        },
        grid:{
            rows:2,
            columns:2
        },
        showlegend:false
    };
    
    Plotly.newPlot(myPie,data,layout);

}