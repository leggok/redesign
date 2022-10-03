import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

import browserSync from 'browser-sync';
import imagemin from 'gulp-imagemin';
import gwebp from 'gulp-webp';

function style() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

function css() {
    return gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

function fonts() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.stream());
}

function html() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src('src/images/**/*')
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
}

function images_min() {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
}

function images_webp() {
    return gulp.src('src/images/**/*')
        .pipe(gwebp())
        .pipe(gulp.dest('dist/images'))
}

function images_copy() {
    return gulp.src('src/images/**/*')
            .pipe(gulp.dest('dist/images'));
}
function demo_copy() {
    return gulp.src('src/demo/**/*')
            .pipe(gulp.dest('dist/demo'));
}

function robots() {
    return gulp.src('src/robots.txt')
        .pipe(gulp.dest('dist'));
}

export function watch() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('src/css/**/*.css', css);
    gulp.watch('src/fonts/**/*', fonts);
    gulp.watch('src/**/*.html', html);
    gulp.watch('src/js/**/*.js', scripts);
    gulp.watch('src/images/**/*', images);
}

export function build(done) {
    style();
    css();
    fonts();
    html();
    scripts();
    robots();
    images_copy();
    demo_copy();
    images_min();
    images_webp();
    done();
}