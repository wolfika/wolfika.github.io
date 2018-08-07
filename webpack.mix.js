const mix = require('laravel-mix');

mix
	.setPublicPath('dist')
	.copy('src/index.html', 'dist/index.html')
	.copyDirectory('src/images', 'dist/images')
	.sass('src/styles.scss', 'styles.css')
	.browserSync({
		cwd: 'dist',
		proxy: false,
		server: 'dist',
		watch: true
	});
