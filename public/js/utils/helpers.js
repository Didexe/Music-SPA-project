export function checkButtons() {
    if(localStorage.getItem('btn-logout')) {
        $('#btn-login').addClass('hidden');
        $('#btn-register').addClass('hidden');
        $('#btn-logout').removeClass('hidden');
        $('#username-login').addClass('hidden');
        $('#password-login').addClass('hidden');
        $('#profile-link').attr('href', '#/user/' + localStorage.getItem('username'));
        $('#profile-link').text('Hello, ' + localStorage.getItem('username') + ' ');
        $('#profile-link').removeClass('hidden');
    }
}

export function notFound() {
   $.get('templates/404.html', function(data) {
     $('#container').html(data);
 });
}

Handlebars.registerHelper('username', function() {
    const username = localStorage.getItem('username');
    return username;
})