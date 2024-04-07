const path = require('path');

module.exports = {
    entry: './src/index.ts',//*selecciona el archivo de entrada
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',//*importante para los archivos de typescript
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',//*el nombre del archivo de salida, de esta manera lo llamas
        path: path.resolve(__dirname, 'dist')
    }
};