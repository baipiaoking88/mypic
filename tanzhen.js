<!--动画-->
window.onload = function () {
$('.nb-menu').css('visibility', 'visible');
$('.footer').css('visibility', 'visible');
$('.nb-menu .right.menu,.nb-menu .item')
  .transition({
     animation: 'fade down in',
     interval: 200,
});
$('.footer .container b,.footer .container small')
  .transition({
     animation: 'fade up in',
     interval: 200,
});
$('.accordion,.cards .card,table,.table tr,.service-status h2')
  .transition({
     animation: 'scale in',
     interval: 150
});
const cpuRollElements = document.querySelectorAll('.cpuroll');
cpuRollElements.forEach((content) => {
   function updateContainerWidth() {
     const containerWidth = content.offsetWidth;
     content.style.setProperty('--container-width', `${containerWidth}px`);
}
 updateContainerWidth();
     window.addEventListener('resize', updateContainerWidth);
});
    $('.cpucontent').addClass("rollanimation");
    
<!--Logo和版权-->
var avatar=document.querySelector(".item img")
var footer=document.querySelector("div.is-size-7")
footer.innerHTML="探针"
footer.style.visibility="visible"
avatar.src="https://fastly.jsdelivr.net/gh/baipiaoking88/picx-images-hosting@master/akemi1.64u3k1qot3o0.webp"
avatar.style.visibility="visible"
}