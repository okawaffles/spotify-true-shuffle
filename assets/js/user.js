function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}


function ReloadProperties() {
    const USE_OPENDYSLEXIC = window.localStorage.getItem('font') == 'dyslexic';
    const COLOR_SCHEME = window.localStorage.getItem('color') || 'green';

    let properties = '';

    if (USE_OPENDYSLEXIC) properties += '--font: "Open-Dyslexic";';


    switch (COLOR_SCHEME) {
        case 'blue':
            properties += `
                --background: #00b4d8;
                --foreground: #0077b6;
                --text: #caf0f8;
                --text-dark: #03045e;
                --button: #00b4d8;
            `
            break;
        case 'pink':
            properties += `
                --background: #ffb3c6;
                --foreground: #ff8fab;
                --text: #ffe5ec;
                --text-dark: #fb6f92;
                --button: #ffb3c6;
            `
            break;
        case 'violet':
            properties += `
                --background: #613dc1;
                --foreground: #4e148c;
                --text: #97dffc;
                --text-dark: #2c0735;
                --button: #858ae3;
            `
            break;
        case 'lightsout':
            properties += `
                --background: #141414;
                --foreground: #000;
                --text: #4c1682;
                --text-dark: white;
                --button: #230046;
            `
            break;
    }

    let themes = document.getElementById('palettes').querySelectorAll('*');
    themes.forEach(theme => theme.style.border = '3px solid white')

    document.getElementsByClassName(COLOR_SCHEME)[0].style.border = '3px solid lightgreen';
    document.documentElement.style.cssText = properties;
}

function SetTheme(color) {
    window.localStorage.setItem('color', color);
    ReloadProperties();
}



docReady(() => {
    ReloadProperties();

    document.getElementById('logout').onclick = function () {
        window.localStorage.removeItem('last_connection_at');
        window.localStorage.removeItem('auth_hash');
        window.localStorage.removeItem('access_token');
        location.reload();
    }
    if (!localStorage.getItem('access_token'))
        document.getElementById('logout').remove()

    // document.getElementById('dyslexia').onclick = function () {
    //     const is_enabled = window.localStorage.getItem('font') == 'dyslexic';
        
    //     window.localStorage.setItem('font', is_enabled?'normal':'dyslexic');

    //     document.getElementById('dyslexia').innerText = is_enabled?'Enable Dyslexic-friendly font':'Disable Dyslexic-friendly font';
    //     ReloadProperties();
    // }
});