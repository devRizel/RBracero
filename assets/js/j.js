
    // Disable right-click
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
    });

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, and other developer shortcuts
    document.addEventListener('keydown', function (e) {
        if (
            e.key === 'F12' || // F12 Developer Tools
            (e.ctrlKey && (e.key === 'i' || e.key === 'I')) || // Ctrl+I
            (e.ctrlKey && (e.key === 'u' || e.key === 'U')) || // Ctrl+U
            (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J')) || // Ctrl+Shift+J
            (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) || // Ctrl+Shift+I
            (e.ctrlKey && (e.key === 'j' || e.key === 'J')) || // Ctrl+J
            (e.ctrlKey && (e.key === 's' || e.key === 'S')) || // Ctrl+S
            (e.ctrlKey && (e.key === 'p' || e.key === 'P')) || // Ctrl+P
            (e.ctrlKey && (e.key === 'c' || e.key === 'C')) || // Ctrl+C
            (e.ctrlKey && (e.key === 'r' || e.key === 'R')) || // Ctrl+R
            (e.ctrlKey && (e.key === 'f' || e.key === 'F'))    // Ctrl+F
        ) {
            e.preventDefault();
        }
    });

    // Disable developer tools check every 100ms
    setInterval(function () {
        if (window.devtools && window.devtools.isOpen) {
            window.location.href = "about:blank";
        }
    }, 100);

    // Disable text selection
    document.addEventListener('selectstart', function (e) {
        e.preventDefault();
    });