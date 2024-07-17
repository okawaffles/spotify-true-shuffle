let first_properties_reload = true;

/**
 * Wait for the document to be ready, then run the callback provided.
 * @param {Function} fn A callback function to be run when the document is ready
 */
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

/**
 * Load the user's properties and apply them
 */
function ReloadProperties() {
    log('USER', 'Reloading user settings...');

    const COLOR_SCHEME = window.localStorage.getItem('color') || 'green';

    let properties = '';


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
        case 'red':
            properties += `
                --background: #ad2e24;
                --foreground: #81171b;
                --text: #ea8c55;
                --text-dark: white;
                --button: #c75146;
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

// Set and store theme
function SetTheme(color) {
    window.localStorage.setItem('color', color);
    ReloadProperties();
}

/**
 * Store a given playlist in window.localStorage
 * @param playlist_id ID of the playlist to store 
 */
function StoreLastUsedPlaylist(playlist_id) {
    window.localStorage.setItem('last_used_playlist', playlist_id);
}

/**
 * Get `last_used_playlist` from window.localStorage and set the playlist dropdown to it
 * If it doesn't exist, don't do anything.
 */
function RestoreLastUsedPlaylist() {
    log ('USER', 'Restoring last used playlist...');
    const LAST_USED_PLAYLIST = window.localStorage.getItem('last_used_playlist');
    if (!LAST_USED_PLAYLIST) return;
    
    const AVAILABLE_PLAYLISTS = document.getElementById('choose_playlist').options;

    // make sure that the playlist is still an option. if not, do nothing
    let playlist_options = [];
    for(let i = 0; i < AVAILABLE_PLAYLISTS.length; i++) {
        playlist_options.push(AVAILABLE_PLAYLISTS[i].value);
    }

    if (playlist_options.indexOf(LAST_USED_PLAYLIST) == -1) {
        log('USER', 'Last used playlist no longer exists, skipping.')
        return; 
    }

    document.getElementById('choose_playlist').value = LAST_USED_PLAYLIST;
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