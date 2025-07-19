/**
 * Custom JavaScript for Portfolio Website
 * Deobfuscated and cleaned version with comments
 */

// Function to create animated stars background effect
function stars() {
    let starCount = 20; // Number of stars to create
    let container = document.querySelector('body'); // Container for stars
    let i = 0;
    
    // Create stars with random positions and animations
    while (i < starCount) {
        let star = document.createElement('i');
        let randomX = Math.floor(Math.random() * window.innerWidth);
        let randomDuration = Math.random() * 1;
        let randomDelay = Math.random() * 100;
        
        // Set star position and animation properties
        star.style.left = randomX + 'px';
        star.style.width = 1 + 'px';
        star.style.height = 50 + randomDelay + 'px';
        star.style.animationDuration = randomDuration + 's';
        
        container.appendChild(star);
        i++;
    }
}

// Initialize stars animation
stars();

// Counter animation function for rocket counter
function count(element) {
    let currentValue = parseInt(element.text(), 10);
    element.text(++currentValue);
    
    // Continue counting until 100, then hide preloader
    if (currentValue !== 100) {
        setTimeout(function() {
            count(element);
        }, 50);
    }
    
    if (currentValue === 100) {
        hidePreloader();
    }
}

// Function to hide the preloader with fade animation
function hidePreloader() {
    $('.loader-wrapper').delay(200).fadeOut('slow');
    
    setTimeout(function() {
        $('html').removeClass('stop-scrolling');
    }, 230);
    
    $('#bubbles_wrap').delay(220).width('slow');
}

// Start the counter animation
count($('#counter-rocket'));

// Main document ready function
$(window).on('load', function() {
    'use strict';
    
    // Hide preloader when page loads
    hidePreloader();
    
    // Chrome browser detection for specific styling
    let isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome) {
        document.getElementsByClassName('infinityChrome')[0].style.display = 'none';
        document.getElementsByClassName('.submenu')[0].style.display = 'block';
    }
    
    // Initialize WOW.js animations
    setTimeout(function() {
        new WOW().init();
    }, 0);
    
    // Animation delays for blog items
    let delays = [200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000];
    let defaultDelay = '200ms';
    
    $('.blog-item.wow').each(function(index) {
        $(this).attr('data-wow-delay', typeof delays[index] === 'undefined' ? defaultDelay : delays[index] + 'ms');
    });
    
    // Portfolio filter functionality
    $('.portfolio-filter-mobile').on('change', function() {
        let filterValue = this.value;
        filterValue = filterFunctions[filterValue] || filterValue;
        $container.isotope({'filter': filterValue});
    });
    
    // Filter functions for portfolio
    let filterFunctions = {
        'numberGreaterThan50': function() {
            let number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        'ium': function() {
            let name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };
});

// Document ready function for UI interactions
$(function() {
    'use strict';
    
    // Menu toggle functionality for mobile
    $('.menu-icon button').on('click', function() {
        $('header.desktop-header-1, main.content, header.mobile-header-1').toggleClass('open');
    });
    
    // Vertical menu interactions
    $('.vertical-menu li a').on('click', function() {
        $('header.desktop-header-1, main.content, header.mobile-header-1').removeClass('open');
    });
    
    $('.submenu').on('click', function() {
        $('header.desktop-header-1, main.content, header.mobile-header-1').removeClass('open');
    });
    
    // Additional menu toggle for different header version
    $('.menu-icon button').on('click', function() {
        $('header.desktop-header-2, main.content-2, header.mobile-header-2').toggleClass('open');
    });
    
    $('.vertical-menu li i.switch').on('click', function() {
        $('header.desktop-header-2, main.content-2, header.mobile-header-2').removeClass('open');
    });
    
    $('.submenu').on('click', function() {
        $('header.desktop-header-2, main.content-2, header.mobile-header-2').removeClass('open');
    });
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]:not([href="#"]').on('click', function(event) {
        let target = $(this);
        $('html, body').stop().animate({
            'scrollTop': $(target.attr('href')).offset().top
        }, 800, 'easeInOutQuad');
        event.preventDefault();
    });
    
    // Initialize Parallax effect if elements exist
    if ($('.parallax').length > 0) {
        let scene = $('.parallax').get(0);
        let parallax = new Parallax(scene, {'relativeInput': true});
    }
    
    // Initialize text rotation animation
    $('.text-rotating').Morphext({
        'animation': 'bounceIn',
        'separator': ',',
        'speed': 2500,
        'complete': function() {}
    });
    
    // Add navigation class
    $('.submenu').addClass('nav-link');
    
    // Initialize scrollspy
    $('.scrollspy').scrollspy({'target': 'body'});
    
    // Initialize counter animation
    $('.count').counterUp({'delay': 10, 'time': 2000});
    
    // Progress bar animation with Waypoint
    if ($('.skill-item').length > 0) {
        let waypoint = new Waypoint({
            'element': document.getElementsByClassName('skill-item'),
            'handler': function(direction) {
                $('.progress-bar').each(function() {
                    let progressWidth = $(this).attr('aria-valuenow') + '%';
                    $(this).animate({'width': progressWidth}, {'easing': 'linear'});
                });
                this.destroy();
            },
            'offset': '50%'
        });
    }
    
    // Set heights for elements with data-height attribute
    let heightElements = document.getElementsByClassName('spacer');
    for (let i = 0; i < heightElements.length; i++) {
        let height = heightElements[i].getAttribute('data-height');
        heightElements[i].style.height = '' + height + 'px';
    }
    
    // Set background colors for elements with data-color attribute
    let colorElements = document.getElementsByClassName('data-background');
    for (let i = 0; i < colorElements.length; i++) {
        let color = colorElements[i].getAttribute('data-color');
        colorElements[i].style.backgroundColor = '' + color + '';
    }
    
    // Add switch icon before submenu items
    $('.submenu').before('<i class="ion-md-add switch"></i>');
    
    // Submenu toggle functionality
    $('.vertical-menu li i.switch').on('click', function() {
        let submenu = $(this).parent('.submenu');
        submenu.slideToggle(300);
        submenu.next().toggleClass('openmenu');
    });
    
    // Return to top button functionality
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 350) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    
    // Return to top click handler
    $('#return-to-top').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({'scrollTop': 0}, 400);
    });
    
    // Fetch and display blog data from Medium RSS feed
    const fetchBlogData = async function() {
        try {
            // Fetch data from RSS2JSON API
            const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40fauzifrd&api_key=htlxn3gibhchbry1v4hxskm2fszhd5ov05yg3xxz');
            const data = await response.json();
            let count = 0;
            
            // Display only first 3 blog posts
            for (let item in data.items) {
                count += 1;
                if (count <= 3) {
                    const blogItem = data.items[item];
                    
                    // Extract image from description content
                    let thumbnail = '';
                    let hasImage = false;
                    const imgMatch = blogItem.description.match(/<img[^>]+src="([^">]+)"/);
                    if (imgMatch) {
                        thumbnail = imgMatch[1];
                        hasImage = true;
                    }
                    
                    // Format date to be more readable
                    const formattedDate = new Date(blogItem.pubDate).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    
                    // Create blog item HTML with conditional image and consistent height
                    let blogHTML = '<div class="col-md-4">' +
                        '<div class="blog-item rounded bg-white shadow-dark wow fadeIn" style="height: ' + (hasImage ? '300px' : '250px') + '; display: flex; flex-direction: column;">';
                    
                    // Add image section only if image exists
                    if (hasImage) {
                        blogHTML += '<div class="thumb" style="height: 150px; overflow: hidden;">' +
                            '<a href="' + blogItem.link + '" target="_blank">' +
                            '<span class="category">Article</span>' +
                            '</a>' +
                            '<a href="' + blogItem.link + '" target="_blank">' +
                            '<img src="' + thumbnail + '" alt="' + blogItem.title + '" style="width: 100%; height: 100%; object-fit: cover;" />' +
                            '</a>' +
                            '</div>';
                    }
                    
                    // Add details section with flex-grow to fill remaining space
                    blogHTML += '<div class="details" style="flex-grow: 1; padding: ' + (hasImage ? '20px' : '30px') + '; display: flex; flex-direction: column; justify-content: space-between;">' +
                        '<h3 class="my-0 title" style="font-size: ' + (hasImage ? '1.1rem' : '1rem') + '; line-height: 1.4; word-wrap: break-word;display: -webkit-box;overflow: hidden;text-overflow: ellipsis;line-clamp: 3;-webkit-line-clamp: 3;-webkit-box-orient: vertical;">' +
                        '<a href="' + blogItem.link + '" target="_blank" style="text-decoration: none; color: inherit;">' +
                        blogItem.title +
                        '</a></h3>' +
                        '<ul class="list-inline meta mb-0 mt-auto" style="font-size: 0.85rem;">' +
                        '<li class="list-inline-item">' + blogItem.author + '</li>' +
                        '<li class="list-inline-item">' + formattedDate + '</li>' +
                        '</ul>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                    
                    // Append to DOM
                    $('#blog_data').append(blogHTML);
                }
            }
            
        } catch (error) {
            console.error('Error fetching blog data:', error);
            
            // Fallback: Display static blog items if API fails
            $('#blog_data').append(
                '<div class="col-md-4">' +
                '<div class="blog-item rounded bg-white shadow-dark wow fadeIn" style="height: 250px; display: flex; flex-direction: column;">' +
                '<div class="details" style="flex-grow: 1; padding: 30px; display: flex; flex-direction: column; justify-content: space-between;">' +
                '<h3 class="my-0 title" style="font-size: 1rem; line-height: 1.4; margin-bottom: 15px;">' +
                '<a href="https://fauzifrd.medium.com" target="_blank" style="text-decoration: none; color: inherit;">' +
                'Kunjungi Blog Medium Saya' +
                '</a></h3>' +
                '<ul class="list-inline meta mb-0 mt-auto" style="font-size: 0.85rem; color: #666;">' +
                '<li class="list-inline-item">Fauzi Ferdiansyah</li>' +
                '<li class="list-inline-item">Medium Blog</li>' +
                '</ul>' +
                '</div>' +
                '</div>' +
                '</div>'
            );
        }
    };
    
    // Execute blog data fetch
    fetchBlogData();
    
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        shakeElement($('html'));
    });
    
    // Disable developer tools keyboard shortcuts
    document.onkeydown = function(event) {
        // F12 key
        if (event.keyCode == 123) {
            shakeElement($('html'));
            return false;
        }
        // Ctrl+Shift+I (Developer Tools)
        if (event.ctrlKey && event.shiftKey && event.keyCode == 'I'.charCodeAt(0)) {
            shakeElement($('html'));
            return false;
        }
        // Ctrl+Shift+C (Inspect Element)
        if (event.ctrlKey && event.shiftKey && event.keyCode == 'C'.charCodeAt(0)) {
            shakeElement($('html'));
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (event.ctrlKey && event.shiftKey && event.keyCode == 'J'.charCodeAt(0)) {
            shakeElement($('html'));
            return false;
        }
        // Ctrl+U (View Source)
        if (event.ctrlKey && event.keyCode == 'U'.charCodeAt(0)) {
            shakeElement($('html'));
            return false;
        }
    };
    
    // Touch event handlers for mobile swipe detection
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    
    let xDown = null;
    let yDown = null;
    
    // Get touch coordinates
    function getTouches(event) {
        return event.touches || event.originalEvent.touches;
    }
    
    // Handle touch start event
    function handleTouchStart(event) {
        const firstTouch = getTouches(event)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }
    
    // Handle touch move event for swipe detection
    function handleTouchMove(event) {
        if (!xDown || !yDown) {
            return;
        }
        
        let xUp = event.touches[0].clientX;
        let yUp = event.touches[0].clientY;
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        
        // Determine swipe direction
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                // Left swipe - close menu
                $('header.desktop-header-2, main.content-2, header.mobile-header-2').removeClass('open');
            } else {
                // Right swipe - open menu if not already open
                if (!$('header.desktop-header-1, main.content, header.mobile-header-1').hasClass('open')) {
                    $('header.desktop-header-2, main.content-2, header.mobile-header-2').toggleClass('open');
                }
            }
        } else {
            if (yDiff > 0) {
                // Up swipe
            } else {
                // Down swipe
            }
        }
        
        // Reset values
        xDown = null;
        yDown = null;
    }
    
    // Shake animation function for security warnings
    function shakeElement(element) {
        let duration = 100;
        let distance = 10;
        let times = 6;
        
        for (let i = 0; i < times + 1; i++) {
            $(element).animate({
                'left': i % 2 == 0 ? distance : distance * -1
            }, duration);
        }
        
        $(element).animate({
            'left': 0,
            'top': 0
        }, duration);
    }
});