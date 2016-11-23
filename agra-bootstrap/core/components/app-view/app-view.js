;
(function () {
    'use strict';

    app.component('appView', {
        transclude: true,
        replace: true,
        template: '<div id="wrapper"><sidebar-menu></sidebar-menu><div id="page-content-wrapper"><div class="container-fluid" ui-view></div></div></div>'
    });

})();
