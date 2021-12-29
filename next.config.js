module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: false,
  // allow external image
  images: {
    domains: ['res.cloudinary.com']
  },
  // custom webpack config
  webpack: (config) => {
    // exclude file loader for svg
    config.module.rules.forEach((rule) => {
      rule.oneOf &&
        rule.oneOf.forEach((subRule) => {
          if (subRule.loader && subRule.loader.indexOf('file-loader') !== -1) {
            subRule.exclude = subRule.exclude.concat([/\.svg$/])
          }
        })
    })
    // use @svgr/webpack loader for svg
    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            ref: true,
            dimensions: false,
            replaceAttrValues: { '#000': 'currentColor' },
            svgoConfig: {
              plugins: [
                {
                  name: 'removeXMLNS'
                }
              ]
            }
          }
        }
      ]
    })
    return config
  }
}
