d3.csv('https://raw.githubusercontent.com/Aerofe/data/main/data/Marry.csv').then(
    res => {
        drawBar(res);
    }
);

function drawBar(res){
    console.log(res);
    let myBar = document.getElementById('myBar');
    let trace1 = {};
    let trace2 = {};
    let trace3 = {};
    let trace4 = {};
    let trace5 = {};
    let trace6 = {};
    let trace7 = {};
    let trace8 = {};

    trace1.type = "bar";
    trace1.x = [];
    trace1.y = [];
    trace1.name = "一月";
    trace1.opacity = 0.5;
    for(let i=0;i<res.length;i++){
        trace1.x[i] = res[i]['區別'];
        trace1.y[i] = res[i]['1月']
    }

    trace2.type = "bar";
    trace2.x = [];
    trace2.y = [];
    trace2.name = "二月";
    trace2.opacity = 0.5;
    for(let i=0;i<res.length;i++){
        trace2.x[i] = res[i]['區別'];
        trace2.y[i] = res[i]['2月']
    }

    trace3.type = "bar";
    trace3.x = [];
    trace3.y = [];
    trace3.name = "三月";
    trace3.opacity = 0.5;
    for(let i=0;i<res.length;i++){
        trace3.x[i] = res[i]['區別'];
        trace3.y[i] = res[i]['3月']
    }
    
    trace4.type = "bar";
    trace4.x = [];
    trace4.y = [];
    trace4.name = "四月";
    trace4.opacity = 0.5;
    for(let i=0;i<res.length;i++){
        trace4.x[i] = res[i]['區別'];
        trace4.y[i] = res[i]['4月']
    }

    trace5.type = "bar";
    trace5.x = [];
    trace5.y = [];
    trace5.name = "五月";
    trace5.opacity = 0.5;
    for(let i=0;i<res.length;i++){
        trace5.x[i] = res[i]['區別'];
        trace5.y[i] = res[i]['5月']
    }

    trace6.type = "bar";
    trace6.x = [];
    trace6.y = [];
    trace6.name = "六月";
    trace6.opacity = 0.5;
    for(let i=0;i<res.length;i++){
        trace6.x[i] = res[i]['區別'];
        trace6.y[i] = res[i]['6月']
    }

    trace7.type = "bar";
    trace7.x = [];
    trace7.y = [];
    trace7.name = "七月";
    trace7.opacity = 0.5;
    for(let i=0;i<res.length;i++){
        trace7.x[i] = res[i]['區別'];
        trace7.y[i] = res[i]['7月']
    }

    trace8.type = "bar";
    trace8.x = [];
    trace8.y = [];
    trace8.name = "八月";
    trace8.opacity = 0.5;
    for(let i=0;i<res.length;i++){
        trace8.x[i] = res[i]['區別'];
        trace8.y[i] = res[i]['8月']
    }
    /*
    for(let z=1;z<9;z++){
        let tracez = {};
        tracez.type = "bar";
        tracez.x=[];
        tracez.y=[];
        tracez.opacity = 0.5;
        for(let i=0; i<res.length;i++){
            tracez.x[i] = res[i]['區別'];
            tracez.y[i] = res[i][z+'月'];
        }
    }*/
    let data = [trace1,trace2,trace3,trace4,trace5,trace6,trace7,trace8];
    let layout = {
        margin: {
            t: 0
        },
        barmode:"stack"
    };
    Plotly.newPlot(myBar, data, layout);
}