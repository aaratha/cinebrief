module.exports = {
    exportTrailingSlash: true,
    images: {
        unoptimized: true, 
        loader: 'imgix',
        path: '/',
    },
    env: {
        OPENAI_API_KEY: process.env.OPEN_AI_API_KEY
    }
}