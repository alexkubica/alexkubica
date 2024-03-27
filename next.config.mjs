/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/mailto",
        destination: "mailto:me@alexkubica.com",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
