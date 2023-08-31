import { build, context } from 'esbuild'

const config = {
  entryPoints: [
    'src/main.ts'
  ],
  entryNames: '[dir]/[name]',
  outdir: 'dist',
  sourcemap: true,
  // format: 'esm',
  platform: 'node',
  bundle: true,
  minify: true,
  logLevel: 'info',
}

const watch = process.argv.length > 2 && process.argv[2] === '--watch'

if (watch) {
  config.minify = false

  try {
    const ctx = await context(config)

    process.on('SIGINT', async () => {
      console.log('\nSIGINT received. Shutting down...')
      await ctx.dispose()
      process.exit(0)
    })

    ctx.watch()
  } catch (err) {
    console.log('error in watch mode:')
    console.error(err)
    process.exit(1)
  }
} else {
  await build(config).catch(err => {
    console.log('error in build mode:')
    console.error(err)
    process.exit(1)
  })
}