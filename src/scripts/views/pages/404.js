const NotFound = {
  async render() {
    return `
      <section class="notfound-box">
          <div class="content-box">
              <h1>404 - Not Found</h1>
              <a href="/#/">Back To Home</a>
          </div>
      </section>
    `;
  },
};

export default NotFound;