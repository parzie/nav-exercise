module.exports = function (grunt) {
    // All upfront config goes in a massive nested object.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        clean: {
            styles: [".tmp/*.sass", "public/css/*"]
        },
        concurrent: {
            dev: ['watch:styles', 'run:dev'],
            options: {
                logConcurrentOutput: true,
                limit: 10
            }
        },
        run: {
            dev: {
                cmd: 'npm',
                args: [
                    'start'
                ]
            },
            options: {
                keepalive: true
            }
        },
        sass: {
            options: {
                sourceMap: false
            },
            dev: {
                files: {
                    'public/css/main.css': 'public/styles/main.scss'
                }
            },
        },
        watch: {
            styles: {
                files: ['public/styles/**/*.scss'], // which files to watch
                tasks: [ 'build-styles-dev'],
                options: {
                    nospawn: true
                }
            }
        }
    }); // The end of grunt.initConfig

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('default', ['server']);

    //Build Tasks
    //Styles
    grunt.registerTask('build-styles-dev', ['clean:styles', 'sass:dev']);

    //Server Tasks
    //Dev server Task.  Watches for Changes to SASS files. And starts connect from src directory
    grunt.registerTask('server', ['build-styles-dev','concurrent:dev']);
};