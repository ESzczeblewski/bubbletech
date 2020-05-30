var map = new Datamap({
    element: document.getElementById('container'),
    fills: {
        HIGH: '#0083bd',
        LOW: '#123456',
        MEDIUM: 'blue',
        UNKNOWN: 'rgb(0,0,0)',
        defaultFill: '#afafaf'
    },
    data: {
        USA: {
            fillKey: 'HIGH'
        },
        NOR: {
            fillKey: 'HIGH'
        },
        AUT: {
            fillKey: 'HIGH'
        },
        ITA: {
            fillKey: 'HIGH'
        },
        VNM: {
            fillKey: 'HIGH'
        },
        DEU: {
            fillKey: 'HIGH'
        },
        GRC: {
            fillKey: 'HIGH'
        }
    }
});

// Draw a legend for this map
map.legend();
