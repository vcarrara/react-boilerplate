module.exports = {
    actions: function () {
        return [
            {
                type: 'remove',
                files: '.travis.yml',
            },
            {
                type: 'remove',
                files: 'saofile.js',
            },
        ]
    },
    async completed() {
        await this.gitInit()
        await this.npmInstall()
        this.showProjectTips()
    },
}
