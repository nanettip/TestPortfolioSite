requirejs.config({
    baseUrl: 'assets/js',
    urlArgs: 'v=4',
    paths: {
      jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min'
    },
    shim: {
        'jquery.linkscroller': ['jquery'],
        'jquery.scrollnav': ['jquery']
    }
});

requirejs(['main']);