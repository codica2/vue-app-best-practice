import directive from './directive'

const install = function(Vue) {
	Vue.directive('directive', directive)
}

if (window.Vue) {
	window['directive'] = directive
	Vue.use(install)
}

directive.install = install
export default directive
