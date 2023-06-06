import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://my-site.com', // Modify as you need
  compressHTML: false,
  build: {
    format: 'directory',
    assets: 'assets'
  },
  vite: {
    appType: 'mpa',
    css: {
      devSourcemap: true
    },
    build: {
      minify: false,
      rollupOptions: {
        output: {
          /**
            * Function that generates the file name for assets.
            *
            * @param {Object} asset - The object representing the asset.
            * @returns {string} - The generated file name.
            */
          assetFileNames: (asset) => {
            // Regular expression to search for custom file name
            const regex = /\/\*\{outputFileName:(.*?)\}\*\//
            const name = asset.name
            const source = asset.source
            const ext = name.substring(name.lastIndexOf('.'), name.length)
            const hasCustomFilename = source.match(regex) // Check if the asset has a custom file name

            switch (ext) {
              case '.css':
                if (hasCustomFilename && hasCustomFilename.length > 0) {
                  const customFilename = hasCustomFilename[1]
                  return `assets/css/${customFilename}${ext}`
                } else {
                  return `assets/css/${name}`
                }
              case '.js':
                return `assets/js/${name}`
              default:
                return name
            }
          },

          entryFileNames: 'assets/js/[name].[hash].js',
          chunkFileNames: 'assets/js/[name].[hash].js'
          // assetFileNames: 'assets/css/[name][extname]'
        }
      }
    }
  }
})
