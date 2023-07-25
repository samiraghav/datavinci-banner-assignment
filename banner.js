    var banner = document.createElement('div');
    banner.className = 'time-banner';

    var image = document.createElement('img');
    image.src = '//www.seikoclocks.in/cdn/shop/products/QHK035R_basic_r2_1024x1024.png?v=1661836315';
    image.className = 'time-banner-image';
    banner.appendChild(image);

    var textContainer = document.createElement('div');
    textContainer.className = 'time-banner-text';
    banner.appendChild(textContainer);

    var text1 = document.createElement('div');
    text1.innerHTML = '<b>Limited Time Offer</b>';
    textContainer.appendChild(text1);

    var text2 = document.createElement('div');
    text2.style.textAlign = 'center';
    textContainer.appendChild(text2);

    var text3 = document.createElement('div');
    text3.innerHTML = `<b>GET 10% OFF&nbsp; </b> Use Code: <b>EXAMSTART</b>`;
    textContainer.appendChild(text3);

    var header = document.getElementsByClassName('headers')[0];
    header.parentNode.insertBefore(banner, header.nextSibling);

    var endTime = new Date().getTime() + 1 * 60 * 1000;

    function updateTimer() {
        var now = new Date().getTime();
        var distance = endTime - now;

        if (distance >= 0) {
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        text2.innerHTML = "Ends in: " + '<b>' + hours.toString().padStart(2, '0') + " : " +
            minutes.toString().padStart(2, '0') + " : " + seconds.toString().padStart(2, '0') + '</b>';
        } else {
            text2.innerHTML = "<b>Expired</b>";
            clearInterval(timerInterval);
            endTime = now + 1 * 60 * 1000;
            timerInterval = setInterval(updateTimer, 1000);
        }
        }

    var timerInterval = setInterval(updateTimer, 1000);

    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
    .time-banner {
        width: 100%;
        height: 40px;
        background: linear-gradient(to right, #f1ad06, #f3820c);
        color: black;
        padding: 0 20px;
        margin: 0.3rem auto;
        border-radius: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: visible;
        position: relative;
     }

    .time-banner-image {
        height: 120%;
        position: absolute;
        margin-left: -2rem;
        overflow: visible;
    }

    .time-banner-text {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding-left: 15px;
    }

    .time-banner-text div:nth-child(1) {
        text-transform: uppercase;
    }

    @media only screen and (max-width: 600px) {
        .time-banner{
            background: #eddba5;
            flex-direction: column;
            height:auto;
            border: 2px solid #ebc25e;
            border-radius: 8px;
            }

        .time-banner-image {
            height: 30px;
            margin-top: 8px;
            left: 30%;
        }

        .time-banner-text {
            padding-left: 0;
            flex-direction: column;
            align-items: center;
        }

        .time-banner-text div:nth-child(1) {
            text-transform: capitalize;
            margin-top: 10px;
        }

        .time-banner-text div:nth-child(1):after {
            content: "";
            display: block;
            background: black;
            height: 1px; 
        }

        .time-banner-text div:nth-child(2) {
            padding: 8px;
        }

        .time-banner-text div:nth-child(3) {
            width:113%;
            text-align: center;
            background: #ebc25e;
            padding: 5px 10px;
            margin-bottom: 10px;
        }       
    }
`;
    document.getElementsByTagName('head')[0].appendChild(style);