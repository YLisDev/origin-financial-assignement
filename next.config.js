/** @type {import('next').NextConfig} */

module.exports = {
    trailingSlash: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack', 'url-loader'],
        });
        return config;
    },
};
