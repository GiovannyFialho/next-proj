const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    generateBuildId: async () => {
        return 'next-proj'
    },
}
