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
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        hot: true,
        historyApiFallback: true,
        host: "0.0.0.0",
        disableHostCheck: true
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
                test: /\.s?[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-modules-typescript-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:5]",
                                localIdentContext: path.resolve(__dirname, "src")
                            }

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
