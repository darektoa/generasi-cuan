const IE = {
  check() {
    const { userAgent } = navigator;
    const pattern = /(MSIE \d|Trident.*rv:)/;

    if (userAgent.match(pattern)) return true;

    return false;
  },

  redirectToEdge() {
    if (this.check()) {
      window.location.href = `microsoft-edge:${window.location.href}`;
      setTimeout(() => {
        window.location.href = 'https://go.microsoft.com/fwlink/?linkid=2135547';
      }, 1);
    }
  },
};

export default IE;