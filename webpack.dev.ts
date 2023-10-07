import { Configuration } from 'webpack';
import webpackMerge from 'webpack-merge';
import common from './webpack.common';

const dev: Configuration = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
};

const mainConfig = webpackMerge(common, dev);

export default mainConfig;
