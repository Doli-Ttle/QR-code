const textEl = document.querySelector('#data');
const sizeEl = document.querySelector('#size');
const logoEl = document.querySelector('#logo');
const clearEl = document.querySelector('#clear');
const marginEl = document.querySelector('#margin');
const dotModeEl = document.querySelector('#dot');
const dotColorEl1 = document.querySelector('#dot-color-1');
const dotColorEl2 = document.querySelector('#dot-color-2');
const bgEl = document.querySelector('#bg-color');
const dlEl = document.querySelector('#btn-dl');

let qr = {
        width: 100,
        height: 100,
        type: "png",
        data: textEl.value,
        image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
        dotsOptions: {
            color: "#4267b2",
            type: "rounded",
            gradient: {
                "type": "linear",
                "colorStops": [
                    {
                        "offset": 0,
                        "color": "#000000"
                    },
                    {
                        "offset": 1,
                        "color": "#000"
                    }
                ]
            }
        },
        backgroundOptions: {
            color: "#e9ebee",
        // },
        // imageOptions: {
        //     crossOrigin: "anonymous",
        //     margin: 20
        }
    };

    // qrCode.append(document.getElementById("canvas"));
    // qrCode.download({ name: "qr", extension: "svg" });

    render();

    sizeEl.addEventListener('input', e=>{
        qr.width = e.target.value * 10;
        qr.height = e.target.value * 10;
        render();
    });

    textEl.addEventListener('keyup', e=>{
        qr.data = e.target.value;
        render();
    });

    marginEl.addEventListener('input', e=>{
        qr.imageOptions = {margin: e.target.value};
        render();
    });

    dotModeEl.addEventListener('change', e=>{
        qr.dotsOptions.type = e.target.value;
        render();
    });

    dotColorEl1.addEventListener('input', e=>{
        qr.dotsOptions.gradient.colorStops[0].color = e.target.value;
        render();
    });

    dotColorEl2.addEventListener('input', e=>{
        qr.dotsOptions.gradient.colorStops[1].color = e.target.value;
        render();
    });

    bgEl.addEventListener('input', e=>{
        qr.backgroundOptions.color = e.target.value;
        render();
    })

    var qrCode;
    function render()
    {
        qrCode = new QRCodeStyling(qr);
        let canvasEl = document.querySelector('#canvas');
        canvasEl.innerHTML= '';
        qrCode.append(canvasEl);
        canvasEl.nextElementSibling.innerHTML = `${qr.width}px x ${qr.height}px`;
    }

    function browse(){
        logoEl.click();
    }

    logoEl.addEventListener('change', e=>{
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = ()=>{
            qr.image = reader.result;
            render();
        };
        reader.readAsDataURL(file);
    });

    clearEl.addEventListener('click', e=>{
        delete qr.image;
        render();
    });

    dlEl.addEventListener('click', e=>{
        qrCode.download({name:'qr', extenstion:'svg'});
    })