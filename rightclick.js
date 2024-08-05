/**
 * Disable right-click of mouse, F12 key, and save key combinations on page
 * By Arthur Gareginyan (https://www.arthurgareginyan.com)
 * Enhanced version
 */

window.onload = function() {
    // Disable right-click context menu
    document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    }, false);

    // Disable specific key combinations
    document.addEventListener("keydown", function(e) {
        // F12 key
        if (e.keyCode == 123) {
            disabledEvent(e);
        }
        // Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        // Ctrl+Shift+J (DevTools)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        // Ctrl+Shift+C (Inspect Element)
        if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
            disabledEvent(e);
        }
        // Ctrl+S (Save)
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
        }
    }, false);

    // Disable Ctrl+Shift+C (Inspect Element) and Ctrl+Shift+K (DevTools Console) in Firefox
    document.addEventListener("keyup", function(e) {
        if (e.ctrlKey && e.shiftKey && (e.keyCode == 67 || e.keyCode == 75)) {
            disabledEvent(e);
        }
    }, false);

    // Disable right-click inspect element context menu in Firefox
    document.addEventListener("mousedown", function(e) {
        if (e.button == 2 && e.ctrlKey) {
            disabledEvent(e);
        }
    }, false);

    // Disable specific key combinations for Windows and Mac
    document.addEventListener("keydown", function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch (e.keyCode) {
                case 65: // Ctrl+A or Cmd+A
                case 67: // Ctrl+C or Cmd+C
                case 80: // Ctrl+P or Cmd+P
                case 88: // Ctrl+X or Cmd+X
                case 86: // Ctrl+V or Cmd+V
                    disabledEvent(e);
                    break;
            }
        }
    }, false);

    function disabledEvent(e) {
        e.preventDefault();
        e.stopPropagation();
        e.returnValue = false;
        return false;
    }
};
