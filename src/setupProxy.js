// import {proxies, sampleProxies, targetURL, DebuggingTargetURL } from './app-config/proxy-config'

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy(
            ['page', 'page2'], {
                target: 'localhost:3000',
                changeOrigin: true,
            })
    );

    /**
     * Sample Page
     */
    // app.use(
    //     proxy(
    //         sampleProxies, {
    //             target: targetURL,
    //             changeOrigin: true,
    //         })
    // );

    /**
     * Set Your proxy in below code.
     */
    // app.use(
    //     proxy(
    //         proxies, {
    //             // Debugging용 
    //             // target: DebuggingTargetURL,
    //             target: targetURL,
    //             changeOrigin: true,
    //         })
    // );
};