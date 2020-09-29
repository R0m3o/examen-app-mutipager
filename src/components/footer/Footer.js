import React from 'react';
import Copyright from './Copyright';
import SignOff from './SignOff';
import $ from 'jquery';

function Footer() {
    $(document).ready(function(){
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 500, function(){
                    window.location.hash = hash;
                });
            }
        });
    }); 

    return(
        <footer>
            <a href="#IdTopOfPage" id="IdToTopBtn"><b>^</b></a>
            <SignOff/>
            <Copyright/>
        </footer>
    )
}

export default Footer;