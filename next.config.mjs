/** @type {import('next').NextConfig} */

const NextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'shopee.com.br',
          },
          {
            protocol: 'https',
            hostname: 'gizmodo.uol.com.br',
          },
          {
            protocol: 'https',
            hostname: 's2-techtudo.glbimg.com',
          },
          {
            protocol: 'https',
            hostname: 'fakestoreapi.com',
          },
          {
            protocol: 'https',
            hostname: 'images6.alphacoders.com',
          },
          {
            protocol: 'https',
            hostname: 'assets.corsair.com',
          },
          {
            protocol: 'https',
            hostname: 'cdn.shoppub.io',
          },
          {
            protocol: 'https',
            hostname: 's2-ge.glbimg.com',
          },
          {
            protocol: 'https',
            hostname: 'images.samsung.com',
          },
          {
            protocol: 'https',
            hostname: 'store.storeimages.cdn-apple.com',
          },
          
        ],
      },
};

export default NextConfig;
