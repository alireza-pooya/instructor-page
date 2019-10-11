particlesJS(
'bg', {
    'particles': {
        'number': {
            'value': 100 // set dots numbers ←
        },
        'color': {
            // set colors and number of colors ↓
            'value': ['#f86031']
        },
        'shape': {
            'type': 'circle',

        },
        'opacity': {
            'value': .2,
            'random': true,
            'anim': {
                'enable': false
            }
        },
        'size': {
            'value': 5, // set dots size ←
            'random': true,
            'anim': {
                'enable': false,
            }
        },
        'line_linked': {
            'enable': false
        },
        'move': {
            'enable': true,
            'speed': 2, // set speed ←
            'direction': 'none',
            'random': true,
            'straight': false,
            'out_mode': 'out'
        }
    },
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onhover': {
                'enable': false
            },
            'onclick': {
                'enable': false
            },
            'resize': true
        }
    },
    'retina_detect': true
});


var a = 0;
$(window).scroll(function () {
    var t1 = $('.features').offset().top - window.innerHeight;
    
    if ($(window).scrollTop() > t1 ) {
        $('.registerFixedBtn').addClass('active')
    } else {
        $('.registerFixedBtn').removeClass('active')
    }
});