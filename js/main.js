var swiper=new Swiper(".swiper-container",{slidesPerView:3,spaceBetween:30,slidesPerGroup:3,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),swiper2=new Swiper(".swiper-container2",{pagination:{el:".swiper-pagination2"}});function openCity(e,t){var n,a,l;for(a=document.getElementsByClassName("tabcontent"),n=0;n<a.length;n++)a[n].style.display="none";for(l=document.getElementsByClassName("tablinks"),n=0;n<l.length;n++)l[n].className=l[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}function openPage(e,t,n){var a,l,i;for(l=document.getElementsByClassName("tabcontent"),a=0;a<l.length;a++)l[a].style.display="none";for(i=document.getElementsByClassName("tablink"),a=0;a<i.length;a++)i[a].style.backgroundColor="";document.getElementById(e).style.display="block",t.style.backgroundColor=n}$(".count").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:4e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})}),document.getElementById("defaultOpen").click();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1Blckdyb3VwIiwibG9vcCIsImxvb3BGaWxsR3JvdXBXaXRoQmxhbmsiLCJwYWdpbmF0aW9uIiwiZWwiLCJjbGlja2FibGUiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwic3dpcGVyMiIsIm9wZW5DaXR5IiwiZXZ0IiwiY2l0eU5hbWUiLCJpIiwidGFiY29udGVudCIsInRhYmxpbmtzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5IiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsImdldEVsZW1lbnRCeUlkIiwiY3VycmVudFRhcmdldCIsIm9wZW5QYWdlIiwicGFnZU5hbWUiLCJlbG1udCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiJCIsImVhY2giLCJ0aGlzIiwicHJvcCIsImFuaW1hdGUiLCJDb3VudGVyIiwidGV4dCIsImR1cmF0aW9uIiwiZWFzaW5nIiwic3RlcCIsIm5vdyIsIk1hdGgiLCJjZWlsIiwiY2xpY2siXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE9BQVMsSUFBSUMsT0FBTyxvQkFBcUIsQ0FDekNDLGNBQWUsRUFDZkMsYUFBYyxHQUNkQyxlQUFnQixFQUNoQkMsTUFBTSxFQUNOQyx3QkFBd0IsRUFDeEJDLFdBQVksQ0FDVkMsR0FBSSxxQkFDSkMsV0FBVyxHQUViQyxXQUFZLENBQ1ZDLE9BQVEsc0JBQ1JDLE9BQVEseUJBSVJDLFFBQVUsSUFBSVosT0FBTyxxQkFBc0IsQ0FDN0NNLFdBQVksQ0FDVkMsR0FBSSx5QkFpQlYsU0FBU00sU0FBU0MsRUFBS0MsR0FDckIsSUFBSUMsRUFBR0MsRUFBWUMsRUFFbkIsSUFEQUQsRUFBYUUsU0FBU0MsdUJBQXVCLGNBQ3hDSixFQUFJLEVBQUdBLEVBQUlDLEVBQVdJLE9BQVFMLElBQ2pDQyxFQUFXRCxHQUFHTSxNQUFNQyxRQUFVLE9BR2hDLElBREFMLEVBQVdDLFNBQVNDLHVCQUF1QixZQUN0Q0osRUFBSSxFQUFHQSxFQUFJRSxFQUFTRyxPQUFRTCxJQUMvQkUsRUFBU0YsR0FBR1EsVUFBWU4sRUFBU0YsR0FBR1EsVUFBVUMsUUFBUSxVQUFXLElBRW5FTixTQUFTTyxlQUFlWCxHQUFVTyxNQUFNQyxRQUFVLFFBQ2xEVCxFQUFJYSxjQUFjSCxXQUFhLFVBR2pDLFNBQVNJLFNBQVNDLEVBQVNDLEVBQU1DLEdBQy9CLElBQUlmLEVBQUdDLEVBQVlDLEVBRW5CLElBREFELEVBQWFFLFNBQVNDLHVCQUF1QixjQUN4Q0osRUFBSSxFQUFHQSxFQUFJQyxFQUFXSSxPQUFRTCxJQUNqQ0MsRUFBV0QsR0FBR00sTUFBTUMsUUFBVSxPQUdoQyxJQURBTCxFQUFXQyxTQUFTQyx1QkFBdUIsV0FDdENKLEVBQUksRUFBR0EsRUFBSUUsRUFBU0csT0FBUUwsSUFDL0JFLEVBQVNGLEdBQUdNLE1BQU1VLGdCQUFrQixHQUV0Q2IsU0FBU08sZUFBZUcsR0FBVVAsTUFBTUMsUUFBVSxRQUNsRE8sRUFBTVIsTUFBTVUsZ0JBQWtCRCxFQXJDaENFLEVBQUUsVUFBVUMsS0FBSyxXQUNmRCxFQUFFRSxNQUFNQyxLQUFLLFVBQVUsR0FBR0MsUUFBUSxDQUM5QkMsUUFBU0wsRUFBRUUsTUFBTUksUUFDbEIsQ0FDQ0MsU0FBVSxJQUNWQyxPQUFRLFFBQ1JDLEtBQU0sU0FBVUMsR0FDWlYsRUFBRUUsTUFBTUksS0FBS0ssS0FBS0MsS0FBS0YsU0FrQ2pDeEIsU0FBU08sZUFBZSxlQUFlb0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogdHJ1ZSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICB2YXIgc3dpcGVyMiA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyMicsIHtcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24yJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIFxyXG4kKCcuY291bnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLnByb3AoJ0NvdW50ZXInLDApLmFuaW1hdGUoe1xyXG4gICAgICBDb3VudGVyOiAkKHRoaXMpLnRleHQoKVxyXG4gIH0sIHtcclxuICAgICAgZHVyYXRpb246IDQwMDAsXHJcbiAgICAgIGVhc2luZzogJ3N3aW5nJyxcclxuICAgICAgc3RlcDogZnVuY3Rpb24gKG5vdykge1xyXG4gICAgICAgICAgJCh0aGlzKS50ZXh0KE1hdGguY2VpbChub3cpKTtcclxuICAgICAgfVxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG9wZW5DaXR5KGV2dCwgY2l0eU5hbWUpIHtcclxuICB2YXIgaSwgdGFiY29udGVudCwgdGFibGlua3M7XHJcbiAgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJjb250ZW50XCIpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0YWJjb250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbiAgdGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFibGlua3NcIik7XHJcbiAgZm9yIChpID0gMDsgaSA8IHRhYmxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0YWJsaW5rc1tpXS5jbGFzc05hbWUgPSB0YWJsaW5rc1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNpdHlOYW1lKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGV2dC5jdXJyZW50VGFyZ2V0LmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gb3BlblBhZ2UocGFnZU5hbWUsZWxtbnQsY29sb3IpIHtcclxuICB2YXIgaSwgdGFiY29udGVudCwgdGFibGlua3M7XHJcbiAgdGFiY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YWJjb250ZW50XCIpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCB0YWJjb250ZW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0YWJjb250ZW50W2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbiAgdGFibGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFibGlua1wiKTtcclxuICBmb3IgKGkgPSAwOyBpIDwgdGFibGlua3MubGVuZ3RoOyBpKyspIHtcclxuICAgIHRhYmxpbmtzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhZ2VOYW1lKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGVsbW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG59XHJcblxyXG4vLyBHZXQgdGhlIGVsZW1lbnQgd2l0aCBpZD1cImRlZmF1bHRPcGVuXCIgYW5kIGNsaWNrIG9uIGl0XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVmYXVsdE9wZW5cIikuY2xpY2soKTsiXX0=
/*var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper2 = new Swiper('.swiper-container2', {
    pagination: {
      el: '.swiper-pagination2',
    },
  });*/

  
$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();