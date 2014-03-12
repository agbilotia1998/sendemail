Router.map(function () {
    this.route('/', {
        path: '/',
        template: 'verifyemail',
    });

    this.route('verifyEmail', {
        controller: 'AccountController',
        path: '/verify-email/:token',
        action: 'verifyEmail'
    });
});

AccountController = RouteController.extend({
    verifyEmail: function () {
        Accounts.verifyEmail(this.params.token, function () {
            Router.go('/');
        });
    }
});
// see: https://github.com/EventedMind/iron-router/issues/3