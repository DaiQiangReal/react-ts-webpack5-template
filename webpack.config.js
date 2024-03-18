/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.DEV === "true";
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const fsExtra = require("fs-extra");
fsExtra.copySync("./public/", "./dist/");
module.exports = {
    entry: "./src/index",
    devServer: {
        static: {
            directory:  path.join(__dirname, "dist"),
            staticOptions: {},
            // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
            // Can be:
            // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
            publicPath: "/",
            // Can be:
            // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
            serveIndex: true,
            // Can be:
            // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
            watch: true,
        },
        port: 8080,
        hot: true,
        historyApiFallback: true,
        host: "0.0.0.0",
        allowedHosts: 'all',
    },
    output: {
        publicPath:''
    },
    devtool: "source-map",
    mode: isDev ? "development" : "production",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            // {
            //     test: /bootstrap\.tsx$/,
            //     loader: "bundle-loader",
            //     options: {
            //         lazy: true
            //     }
            // },
            {
                test: /\.tsx?$/,
                loader: "esbuild-loader",
                exclude: /node_modules/,
                options: {
                    loader: "tsx",
                    target: "esnext"
                }
            },
            {
                test: /\.jsx?$/,
                loader: "esbuild-loader",
                exclude: /node_modules/,
                options: {
                    loader: "jsx",
                    target: "esnext"
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"

        }),
        new MiniCssExtractPlugin()
    ]
};
