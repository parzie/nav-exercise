
/**
 * Module to Handle on Close/Open Menu
 *
 * @author - Parzifal de León
 */

 // self executing function here
(function () {

    const _model = this,
        nav = {
            mobileOptions: document.getElementById('nav-options'),
            logo: document.getElementById('logo'),
            pushItems: document.getElementById('push-items'),
            mask: document.getElementById('translucent-mask-mobile'),
            subNavChildren: document.getElementsByClassName('sub-nav-child'),
            buttons: {
                open: document.getElementById('toggle-open'),
                close: document.getElementById('toggle-close')
            }
        };

    _init();


    /**
     * Function to initialize variables
     */
    function _init() {
        nav.buttons.open.addEventListener('click', _onOpenMenu);
        nav.buttons.close.addEventListener('click', _onCloseMenu);
        nav.mask.addEventListener('click', _onCloseMenu);
        for (let child of nav.subNavChildren) {
            child.addEventListener('click', _onCloseMenu);
        }
    }

    /**
	 * Function that triggers when user wants to show navbar
	 */
    function _onOpenMenu(event) {
        console.log("open");
        nav.buttons.close.classList.remove('hide');
        nav.mobileOptions.classList.remove('hide');
        nav.logo.classList.remove('hide');

        nav.mask.classList.remove('no-mask');
        nav.mask.classList.add('mask');

        nav.mobileOptions.classList.remove('push-options-reverse');
        nav.mobileOptions.classList.add('push-options');

        nav.pushItems.classList.remove('pushed-reverse');
        nav.pushItems.classList.add('pushed');

        nav.buttons.close.classList.remove('close-dismiss');
        nav.buttons.close.classList.add('close-show');

        nav.buttons.open.classList.remove('menu-show');
        nav.buttons.open.classList.add('menu-dismiss');

        nav.logo.classList.remove('push-logo-reverse');
        nav.logo.classList.add('push-logo');
    }

	/**
	 * Function that triggers when user wants to close navbar
	 */
    function _onCloseMenu(event) {
        console.log("close");
        nav.mask.classList.add('no-mask');
        nav.mask.classList.remove('mask');

        nav.mobileOptions.classList.add('push-options-reverse');
        nav.mobileOptions.classList.remove('push-options');

        nav.pushItems.classList.remove('pushed');
        nav.pushItems.classList.add('pushed-reverse');

        nav.buttons.close.classList.remove('close-show');
        nav.buttons.close.classList.add('close-dismiss');

        nav.buttons.open.classList.remove('menu-dismiss');
        nav.buttons.open.classList.add('menu-show');

        nav.logo.classList.add('push-logo-reverse');
        nav.logo.classList.remove('push-logo');
    }

})();