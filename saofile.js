module.exports = {
    actions: function () {
        return [
            {
                type: 'add',
                files: '**',
            },
        ]
    },
    async completed() {
        await this.gitInit()
        await this.npmInstall()
        this.showProjectTips()
    },
}
