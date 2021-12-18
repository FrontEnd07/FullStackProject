const aliases = (prefix = `src`) => ({
    '@components': `${prefix}/components`,
    '@fonts': `${prefix}/fonts`,
    '@style': `${prefix}/style`,
    '@view': `${prefix}/view`,
    '@store': `${prefix}/store`,
    '@http': `${prefix}/http`,
    '@assets': `${prefix}/assets`,
    '@hooks': `${prefix}/hooks`,

});

module.exports = aliases;