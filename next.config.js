module.exports = {
  async headers() {
    return [
      {
        source: "/ssr",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=1, stale-while-revalidate",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/about",
        destination: "https://46brew.app/about",
      },
      {
        source: "/:path*",
        destination:
          "https://otovoweb-rix1-test-rewr-bntg5u.herokuapp.com/:path*",
      },
    ];
  },
};
