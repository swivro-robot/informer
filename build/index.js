const { build } = require("esbuild");
const { resolve } = require("path");

const main = async () => {
    await build({
        entryPoints: {
            app: "./src/index.tsx"
        },
        outdir: resolve(process.cwd(), "dist"),
        bundle: true,
        sourcemap: "both",
        treeShaking: true,
        minify: process.env.NODE_ENV == "production",
        logLevel: "debug"
    })
}
main();