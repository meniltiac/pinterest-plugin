# pinterest-plugin
A Pinterest Plugin for WordPress

This plugin was created in order to add the functionality of a Pinterest button to both desktop and mobile versions of a website. On desktop, the 'Pin It' buttons should appear on hover and will take the user to a Pinterest Pin on click, and on mobile devices, the 'Pin It' buttons should appear automatically, and will take the user to a Pinterest Pin in a new window on touch.

# Installation

    Upload pinterest-plugin.zip to your server
    Unzip pinterest-plugin.zip and add all the files to the directory where you'd like them to reside
    Add the following to your header or functions.php file (make sure that the js is loaded after jQuery):

    <link rel="stylesheet" href="path-to/pinterest-plugin/css/pinterest.css">

    <script src="path-to/pinterest-plugin/js/pinterest.js"></script>
    Wherever you'd like to include a Pin It button with click and touch functionality, add the class .pin-wrapper to the div surrounding your image.

    EXAMPLE:

    <div class="pin-wrapper">

    <img src="images/myimage.jpg" alt="my image">

    </div>

# Debugging Notes

The show on hover works by adding a style of position: relative; to the .pin-wrapper div. If you added the class of .pin-wrapper to an existing div with the style of position: relative;, the Pin It button will appear all the time. To fix, just add a new div that surrounds your existing div with the class of .pin-wrapper.
