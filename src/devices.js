// Script para realizar el diseño responsivo

const sizes = {
	mobile: '360px',
	tablet: '700px',
	desktop: '1024px',
	desktopFirst: '1600px',
	desktopSecond: '1900px',
	desktopThird: '2300px'
}

export const devices = {
	mobile: `(min-width: ${ sizes.mobile })`,
	tablet: `(min-width: ${ sizes.tablet })`,
	desktop: `(min-width: ${ sizes.desktop })`,
	desktopFirst: `(min-width: ${ sizes.desktopFirst })`,
	desktopSecond: `(min-width: ${ sizes.desktopSecond })`,
	desktopThird: `(min-width: ${ sizes.desktopThird })`
}