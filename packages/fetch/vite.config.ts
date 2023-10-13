import path from 'path';
import {defineConfig} from 'vite';
import dtsPlugin from 'vite-plugin-dts';

export default defineConfig({
    build: {
        outDir: 'lib',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            formats: ['es', 'cjs'],
            fileName: (format) => {
                const names = {es: 'index.mjs', cjs: 'index.js'};
                return names[format];
            },
        },
    },
    plugins: [dtsPlugin({rollupTypes: true})],
});
