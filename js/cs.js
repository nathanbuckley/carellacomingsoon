
/*
*
*/


//Initiate Splititng for onload coming soon animaition
Splitting(); 


// insit new modal
var notifymodal = new tingle.modal({
    footer: false,
    closeMethods: ['overlay', 'escape'],
    closeLabel: 'Close',
    cssClass: ['modal'],
});

// notify modal content

var content = 
'<h1>Carella Creation</h1>'+
'<p>Join Our Mailing list or follow us on social media to stay up to date with all the latest'+
'news, products, announcements and more.</p>'+
'<form id="form" action="https://formspree.io/nth.buckley@gmail.com" method="POST">'+
'<input type="text" id="fname" name="name" placeholder="Name"/>'+
'<input type="email" id="femail" name="email" placeholder="Email"/>'+
'<input type="hidden" name="_subject" value="Someone Signed Up!!!"/>'+
'<input type="hidden" name="_next" value=""/>'+
'<input type="text" name="_gotcha" style="display:none"/>'+
'<div id="fsub"><input type="submit" value="Submit"></div>'+
'</form>'+
'<div id="socialnotify">'+
'<a href="https://www.instagram.com/carellacreation" target="_blank"><i class="fab fa-instagram"></i></a>'+
'<a href="https://www.facebook.com/carellacreation" target="_blank"><i class="fab fa-facebook"></i></a>'+
'<a href="http://www.pinterest.com/carellacreation" target="_blank"><i class="fab fa-pinterest-square"></i></a>'+
'</div>';

notifymodal.setContent(content);

// function called by notify me butt onclick (Opens Modal)
function opennotifymodal() {
    notifymodal.open(); 
}