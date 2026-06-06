function automaticScroll() {
   setTimeout(() => {
      const contnet_wrapper = document.body.querySelector('.wrapper')
      if (contnet_wrapper) {
         contnet_wrapper.classList.add('slide');
      }
   }, 1000);
}
automaticScroll();