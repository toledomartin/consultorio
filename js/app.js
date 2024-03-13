var delay = 1500;
setTimeout(function () {
    $('.Cpreloader').addClass('loadedComplete');
}, delay);
var $ = Dom7;
var theme = 'ios';
if (location.href.indexOf('theme=md') >= 0) theme = 'md';
if (location.href.indexOf('theme=aurora') >= 0) theme = 'aurora';
var plugin = {
    params: {
        theme: theme,
        root: '#app',
    }
};
if (Framework7.use) Framework7.use(plugin);
else if (Framework7.Class && Framework7.Class.use) Framework7.Class.use(plugin);
var app = new Framework7({
    id: 'io.framework7.findOut',
    el: '#app',
    cache: false,
    theme: theme,
    routes: routes,
    popup: {
        closeOnEscape: true
    },
    sheet: {
        closeOnEscape: true
    },
    popover: {
        closeOnEscape: true
    },
    actions: {
        closeOnEscape: true
    },
    vi: {
        placementId: 'pltd4o7ibb9rc653x14'
    },
});
app.on('pageBeforeIn', function (page) {
    var $$ = Dom7;
    if (page.$el.hasClass('page-home')) {
        $$('.item-home img').attr("src", "img/main-menu/home-active.svg")
    } else {
        $$('.item-home img').attr("src", "img/main-menu/home.svg")
    }
    if (page.$el.hasClass('page-bookmarks')) {
        $$('.item-bookmark img').attr("src", "img/main-menu/bookmark-active.svg")
    } else {
        $$('.item-bookmark img').attr("src", "img/main-menu/bookmark.svg")
    }
    if (page.$el.hasClass('page-search')) {
        $$('.item-search').addClass('primary-dark-bg')
    } else {
        $$('.item-search').removeClass('primary-dark-bg')
    }
    if (page.$el.hasClass('page-chat')) {
        $$('.item-chat img').attr("src", "img/main-menu/chat-active.svg")
    } else {
        $$('.item-chat img').attr("src", "img/main-menu/chat.svg")
    }
    if (page.$el.hasClass('page-notification')) {
        $$('.item-notify img').attr("src", "img/main-menu/notify-active.svg")
    } else {
        $$('.item-notify img').attr("src", "img/main-menu/notify.svg")
    }
    if (page.$el.hasClass('page-home')) {
        $$('.toolbar-bottom.home-menu .toolbar-inner').removeClass('bg-white');
    } else {
        $$('.toolbar-bottom.home-menu .toolbar-inner').addClass('bg-white');
    }
    $$('.theme-direction').on('click', function () {
        if ($$('#app').hasClass('dir-rtl')) {
            $$('#app').removeClass('dir-rtl');
        } else {
            $$('#app').addClass('dir-rtl');
        }
        if ($$(".content-dir").html() == `Content Style-RTL`) {
            $$(".content-dir").html(`Content Style-LTR`);
        } else {
            $$(".content-dir").html(`Content Style-RTL`);
        }
    });
});
app.on('pageInit', function (page) {
    var $$ = Dom7;
    if (page.$el.hasClass('page-walkthrough') || page.$el.hasClass('page-walkthrough-v2')) {
        var hrefVal = $$('.walkthrough-next').attr('href');
        $$('.walkthrough-next').removeAttr('href');
        var walkthroughSlider = app.swiper.get('.walkthrough-slider .swiper-container');
        walkthroughSlider.on('slideChange', function () {
            var totalItems = walkthroughSlider.slides.length;
            var currentIndex = walkthroughSlider.activeIndex + 1;
            if (currentIndex === totalItems) {
                $$('.walkthrough-next').attr('href', hrefVal);
            } else {
                $$('.walkthrough-next').removeAttr('href');
            }
        });
    }
    app.sheet.create({
        el: '.the-filter',
        swipeToClose: true,
        backdrop: true,
        backdropUnique: true
    });
    app.sheet.create({
        el: '.stay-filter',
        swipeToClose: true,
        backdrop: true,
        backdropUnique: true
    });
    app.sheet.create({
        el: '#the-filter',
        swipeToClose: true,
        backdrop: true,
        backdropUnique: true
    });
    app.sheet.create({
        el: '.reservation-filter',
        swipeToClose: true,
        backdrop: true,
        backdropUnique: true
    });
    let monthNames, stayDate, reservation, placeCalendar, clickAndSelect, clickAndSelectAll, clearFilter, clearChecks, roomStepper, visitorStepper, adultStepper, childrenStepper, photoGallery;
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    stayDate = app.calendar.create({
        containerEl: '#stay-dates',
        rangePicker: true,
        inputEl: '#stayDateVal, #date-selected',
        weekday: 'short',
        dateFormat: 'd M',
        renderToolbar: function () {
            return `<div class="toolbar calendar-custom-toolbar no-shadow"><div class="toolbar-inner jc-c"><div class="center"></div></div></div>`;
        },
        renderWeekHeader: function () {
            return `<div class="weekDays d-flex jc-sb ai-c"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div>`;
        },
        on: {
            init: function (c) {
                $('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ' ' + c.currentYear);
            },
            monthYearChangeStart: function (c) {
                $('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ' ' + c.currentYear);
            },
        },
    });
    reservation = app.calendar.create({
        containerEl: '#reservation',
        timePicker: true,
        inputEl: '#stayDateVal, #date-selected',
        weekday: 'short',
        timePickerPlaceholder: '',
        dateFormat: 'd M, hh::mm A',
        renderToolbar: function () {
            return `<div class="toolbar calendar-custom-toolbar no-shadow"><div class="toolbar-inner jc-c"><div class="center"></div></div></div>`;
        },
        renderWeekHeader: function () {
            return `<div class="weekDays d-flex jc-sb ai-c"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div>`;
        },
        on: {
            init: function (c) {
                $('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ' ' + c.currentYear);
            },
            monthYearChangeStart: function (c) {
                $('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ' ' + c.currentYear);
            },
        },
    });
    placeCalendar = app.calendar.create({
        containerEl: '#place-calendar',
        timePicker: true,
        inputEl: '#stayDateVal, #date-selected',
        weekday: 'short',
        timePickerPlaceholder: '',
        dateFormat: 'd M, hh::mm A',
        renderToolbar: function () {
            return `<div class="toolbar calendar-custom-toolbar no-shadow"><div class="toolbar-inner jc-c"><div class="center"></div></div></div>`;
        },
        renderWeekHeader: function () {
            return `<div class="weekDays d-flex jc-sb ai-c"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div>`;
        },
        on: {
            init: function (c) {
                $('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ' ' + c.currentYear);
            },
            monthYearChangeStart: function (c) {
                $('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] + ' ' + c.currentYear);
            },
        },
    });
    roomStepper = app.stepper.create({
        el: '.room-stepper',
        wraps: true,
        autorepeat: true,
        autorepeatDynamic: true,
        decimalPoint: 2,
        manualInputMode: true,
        inputEl: '#rooms, #selectedRooms, .room-stepper input'
    });
    visitorStepper = app.stepper.create({
        el: '.visitor-stepper',
        wraps: true,
        autorepeat: true,
        autorepeatDynamic: true,
        decimalPoint: 2,
        manualInputMode: true,
        inputEl: '#visitors, #selectedMembers, .visitor-stepper input'
    });
    adultStepper = app.stepper.create({
        el: '.adult-stepper',
        wraps: true,
        autorepeat: true,
        autorepeatDynamic: true,
        decimalPoint: 2,
        manualInputMode: true,
        inputEl: '#selectedMembers, #members, #room-member-a'
    });
    childrenStepper = app.stepper.create({
        el: '.children-stepper',
        wraps: true,
        autorepeat: true,
        autorepeatDynamic: true,
        decimalPoint: 2,
        manualInputMode: true,
        inputEl: '#selectedMembers, #members, #room-member-c'
    });
    photoGallery = app.photoBrowser.create({
        photos: ['img/gallery/01.jpg', 'img/gallery/02.jpg', 'img/gallery/03.jpg', 'img/gallery/04.jpg', 'img/gallery/05.jpg', ],
        type: 'standalone',
        theme: 'light',
        virtualSlides: true,
        navbarShowCount: false,
        momentumBounce: false,
        popupCloseLinkText: '<i class="f7-icons">xmark</i>',
        swiper: {
            speed: 600,
            navigation: {
                nextEl: '.photo-browser-next',
                prevEl: '.photo-browser-prev',
            },
            pagination: {
                el: '.gallery-pagination',
            },
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },
        },
        renderNavbar: function () {
            return `<div class="close-photo-gallery link popup-close"><i class="f7-icons">xmark</i></div>`;
        },
        renderToolbar: function () {
            return `<div class="photo-gallery-footer d-flex jc-sb ai-c px-24"><i class="f7-icons link photo-browser-prev">arrow_left</i><div class="gallery-pagination"></div><i class="f7-icons link photo-browser-next">arrow_right</i></div>`;
        },
    });
    $('.photo-gallery a').on('click', () => {
        photoGallery.open()
    });
    $$('.header-tab-v2 .tab-link').on('click', function () {
        $$('.header-tab-v2 .tab-link').removeClass('tab-link-active');
        $$(this).addClass('tab-link-active');
    });
    clickAndSelectAll = ['.bookmarker', '.bookmarker-single', '.sort-by span', '.react2it', '.like-btn', ];
    clickAndSelect = ['.rating-box span', '.cate-item', '.listing-type li a', '.gallery-tabs .swiper-slide a', ];
    clearFilter = ['.sort-by span', '.rating-box span', '.cate-item', ];
    clearChecks = ['.facilities-check input[type="checkbox"]']
    clickAndSelect.forEach((e) => {
        $$(e).on('click', function () {
            $$(e).removeClass('selected');
            $$(this).addClass('selected');
        });
    });
    clickAndSelectAll.forEach((e) => {
        $$(e).on('click', function () {
            if ($$(this).hasClass('selected')) {
                $$(this).removeClass('selected');
            } else {
                $$(this).addClass('selected');
            }
        });
    });
    $$('.clear-filter').forEach((f) => {
        $$(f).on('click', function () {
            clearFilter.forEach((e) => {
                $$(e).removeClass('selected');
            });
            clearChecks.forEach((e) => {
                $$(e).prop('checked', false);
            });
        });
    });
    $$('.star-rating > span').on('click', function () {
        $$(this).addClass('active').siblings().removeClass('active');
        $$(this).parent().attr('data-rating-value', $$(this).data('rating-value'));
    });
    $$(".otpfield").forEach((e) => {
        $$(e).on('keyup', function () {
            $$(e).removeClass('filled');
            if (e.value.length == e.maxLength) {
                var next = $$(e).next('.otpfield');
                if (next.length) {
                    $$(e).addClass('filled');
                    $$(e).next('.otpfield').focus();
                } else {
                    $$(e).addClass('filled');
                    $$(e).blur();
                }
            }
        });
    });
    $$(':not(.tabs-swipeable-wrap .swiper-slide, .walkthrough-slider .swiper-slide, .the-thumbnail .swiper-slide, .photo-browser-swiper-container .swiper-slide, .gallery-tabs .swiper-slide, .pricing-slider .swiper-slide).swiper-slide').forEach((e) => {
        $$(e).on('touchstart', function () {
            if ($$(this).hasClass('active-state')) {
                $$(this).removeClass('active-state');
            } else {
                $$(this).addClass('active-state');
            }
        });
    });
    $$(':not(.tabs-swipeable-wrap .swiper-slide, .walkthrough-slider .swiper-slide, .the-thumbnail .swiper-slide, .photo-browser-swiper-container .swiper-slide, .gallery-tabs .swiper-slide, .pricing-slider .swiper-slide).swiper-slide').forEach((e) => {
        $$(e).on('touchend', function () {
            $$(this).removeClass('active-state');
        });
    });
    if (page.$el.hasClass('page-gMap-box')) {
        let mapBox = L.map('GooGle__MapBox', {
            scrollWheelZoom: false
        }).setView([43.265241475182314, -79.87005293369293], 16);
        L.tileLayer('http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
            maxZoom: 20,
            minZoom: 9,
            maxNativeZoom: 20
        }).addTo(mapBox);
        let mapIcon = L.icon({
            iconUrl: 'img/map-markers/01.svg',
            iconSize: [28, 28]
        });
        let mapIconActive = L.icon({
            iconUrl: 'img/map-markers/open-state.svg',
            iconSize: [13, 13]
        });
        let theTemplate = `<a href="#"class="the-li d-flex bg-white"><img src="img/small-thumb-list/05.png"/><div class="list-body margin-left posr"><div class="card-bottom"><h3 class="d-flex ai-c width-100"><span><i class="foi-car"></i></span>Aquaventure Park</h3><span>Fun&Waterpark Rides</span><div class="d-flex jc-sb ai-b width-100">
<p>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<i>5.0</i><br/>
<span class="no-margin">(84)reviews</span>
</p>
</div></div><img src="img/icons/plane.svg"/></div></a>`;
        let mapMarker = L.marker([43.265241475182314, -79.87005293369293], {
            icon: mapIcon
        }).addTo(mapBox).bindPopup(theTemplate);
        mapBox.on('popupopen', function () {
            mapMarker.setIcon(mapIconActive);
        });
        mapBox.on('popupclose', function () {
            mapMarker.setIcon(mapIcon);
        });
    };
    if (page.$el.hasClass('li-event')) {
        let eventMap = L.map('eventMap', {
            scrollWheelZoom: false
        }).setView([43.26604226314991, -79.86925363540648], 17);
        L.tileLayer('http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
            maxZoom: 20,
            minZoom: 9,
            maxNativeZoom: 20
        }).addTo(eventMap);
        let mapIcon = L.icon({
            iconUrl: 'img/map-markers/02.svg',
            iconSize: [28, 28]
        });
        let mapIconActive = L.icon({
            iconUrl: 'img/map-markers/open-state.svg',
            iconSize: [13, 13]
        });
        let theTemplate = `<a href="#"class="the-li d-flex bg-white"><img src="img/small-thumb-list/05.png"/><div class="list-body margin-left"><div class="card-bottom"><h3 class="d-flex ai-c width-100"><span><i class="foi-event"></i></span>Tribune Chownk</h3><span>Musical Evening Event</span><div class="event-time d-flex margin-top-half width-100 posr"><i class="op-half"><img src="img/icons/calendar.svg"/></i><span>2 June 2021,<br/>5:00PM-9 PM</span><img src="img/icons/plane.svg"/></div></div></div></a>`;
        let mapMarker = L.marker([43.26604226314991, -79.86925363540648], {
            icon: mapIcon
        }).addTo(eventMap).bindPopup(theTemplate);
        eventMap.on('popupopen', function () {
            mapMarker.setIcon(mapIconActive);
        });
        eventMap.on('popupclose', function () {
            mapMarker.setIcon(mapIcon);
        });
    };
    if (page.$el.hasClass('page-google-map')) {
        let map = L.map('GooGle__Map', {
            scrollWheelZoom: false
        }).setView([43.265241475182314, -79.87005293369293], 16);
        L.tileLayer('http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
            maxZoom: 20,
            minZoom: 9,
            maxNativeZoom: 20
        }).addTo(map);
        let templates = {
            t1: `<a href="#"class="the-li d-flex bg-white"><img src="img/small-thumb-list/01.jpg"/><div class="list-body margin-left-half"><div class="card-bottom"><h3 class="d-flex ai-c"><span><i class="foi-car"></i></span>Palm Island</h3><span>Architectural Landmark</span><div class="d-flex jc-sb ai-b">
<p>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<i>5.0</i>
<span class="no-margin">(84)reviews</span>
</p>
</div><div class="facilities posr p-0 m-0 no-pseudo"><div class="d-flex ai-c"><h4>Facilities:</h4><i class="foi-wifi secondary-dark"></i><i class="foi-parking dark3"></i><i class="foi-no-smoking text-color-black"></i></div></div></div></div></a>`,
            t2: `<a href="#"class="the-li d-flex bg-white"><img src="img/small-thumb-list/03.jpg"/><div class="list-body margin-left-half"><div class="card-bottom"><h3 class="d-flex ai-c"><span><i class="foi-event"></i></span>Atlantis Hotel</h3><span>Hotel&Waterpark</span><div class="d-flex jc-sb ai-b">
<p>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<i>5.0</i>
<span class="no-margin">(84)reviews</span>
</p>
</div><div class="facilities posr p-0 m-0 no-pseudo"><div class="d-flex ai-c"><h4>Facilities:</h4><i class="foi-wifi secondary-dark"></i><i class="foi-parking dark3"></i><i class="foi-no-smoking text-color-black"></i></div></div></div></div></a>`,
            t3: `<a href="#"class="the-li d-flex bg-white"><img src="img/small-thumb-list/03.jpg"/><div class="list-body margin-left-half"><div class="card-bottom"><h3 class="d-flex ai-c"><span><i class="foi-resta"></i></span>Atlantis Hotel</h3><span>Hotel&Waterpark</span><div class="d-flex jc-sb ai-b">
<p>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<i>5.0</i>
<span class="no-margin">(84)reviews</span>
</p>
</div><div class="facilities posr p-0 m-0 no-pseudo"><div class="d-flex ai-c"><h4>Facilities:</h4><i class="foi-wifi secondary-dark"></i><i class="foi-parking dark3"></i><i class="foi-no-smoking text-color-black"></i></div></div></div></div></a>`,
            t4: `<a href="#"class="the-li d-flex bg-white"><img src="img/small-thumb-list/02.jpg"/><div class="list-body margin-left-half"><div class="card-bottom"><h3 class="d-flex ai-c"><span><i class="foi-hotel"></i></span>Atlantis Hotel</h3><span>Hotel&Waterpark</span><div class="d-flex jc-sb ai-b">
<p>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<img src="img/icons/rating-star.svg"/>
<i>5.0</i>
<span class="no-margin">(84)reviews</span>
</p>
</div><div class="facilities posr p-0 m-0 no-pseudo"><div class="d-flex ai-c"><h4>Facilities:</h4><i class="foi-wifi secondary-dark"></i><i class="foi-parking dark3"></i><i class="foi-no-smoking text-color-black"></i></div></div></div></div></a>`,
        };
        var mapIcon = L.Icon.extend({
            options: {
                iconSize: [28, 28]
            }
        });
        var i1 = new mapIcon({
                iconUrl: 'img/map-markers/01.svg'
            }),
            i2 = new mapIcon({
                iconUrl: 'img/map-markers/02.svg'
            }),
            i3 = new mapIcon({
                iconUrl: 'img/map-markers/03.svg'
            }),
            i4 = new mapIcon({
                iconUrl: 'img/map-markers/04.svg'
            });
        let marker1 = L.marker([43.265241475182314, -79.87005293369293], {
                icon: i1
            }).addTo(map).bindPopup(templates.t1),
            marker2 = L.marker([43.26438598761802, -79.8707127571106], {
                icon: i2
            }).addTo(map).bindPopup(templates.t2),
            marker3 = L.marker([43.26604226314991, -79.86925363540648], {
                icon: i3
            }).addTo(map).bindPopup(templates.t3),
            marker4 = L.marker([43.264932876031615, -79.86882448196411], {
                icon: i4
            }).addTo(map).bindPopup(templates.t4);
        let featureGroup = L.featureGroup([marker1, marker2, marker3, marker4]);
        map.fitBounds(featureGroup.getBounds(), {
            padding: [16, 16]
        });
    }
});

var mainView = app.views.create('.view-main', {
    browserHistory: true,
    preloadPreviousPage: false
});