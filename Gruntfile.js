module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            files: ['index.html'],
            options: {
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
}