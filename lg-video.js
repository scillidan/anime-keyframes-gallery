jQuery("#lg-video")
  .justifiedGallery({
    rowHeight: 180,
    margins: 1.5,
    lastRow : 'nojustify',
    captions: true,
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("lg-video"),
      {
        galleryId: "gif",
        plugins: [lgVideo, lgHash],
        customSlideName: true,
        autoplayFirstVideo: false,
        addClass: 'lg-custom-thumbnails',
        download: false,
        paper: false,
        allowMediaOverlap: false,
        animateThumb: false,
        closeOnTap: false,
        enableDrag: false,
        enableSwipe: false,
        mousewheel: true,
        swipeToClose: false,
        videojs: true,
        mobileSettings: {
          controls: false,
          showCloseIcon: false,
          download: false,
          rotate: false
        },
      }
    );
  });

document.addEventListener("DOMContentLoaded", function() {
    var galleryItems = document.querySelectorAll('a.gallery-item');

    galleryItems.forEach(function(item) {
        item.setAttribute('data-lg-size', '640');
    });
});