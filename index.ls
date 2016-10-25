require! './src/world.ls': { world }

module.exports = do
    message: 'hello ' + world
