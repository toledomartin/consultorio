var routes = [
  // get-started
  {
    path: '/',
    componentUrl: './pages/get-started.html',
    name: 'getStarted',
    options: {
      transition: 'f7-parallax',
    },
  },

  // create-account
  {
    path: '/create-account/',
    componentUrl: './pages/create-account.html',
    name: 'createAccount',
    options: {
      transition: 'f7-parallax',
    },
  },

  // create-account
  {
    path: '/login/',
    componentUrl: './pages/login.html',
    name: 'login',
    options: {
      transition: 'f7-parallax',
    },
  },

  // otp
  {
    path: '/otp/',
    componentUrl: './pages/otp.html',
    name: 'otp',
    options: {
      transition: 'f7-parallax',
    },
  },

  // walkthrough
  {
    path: '/walkthrough/',
    componentUrl: './pages/walkthrough.html',
    name: 'walkthrough',
    options: {
      transition: 'f7-parallax',
    },
  },
  {
    path: '/walkthrough-v2/',
    componentUrl: './pages/walkthrough-v2.html',
    name: 'walkthroughV2',
    options: {
      transition: 'f7-parallax',
    },
  },

  // permissions
  {
    path: '/permissions/',
    componentUrl: './pages/permissions.html',
    name: 'permissions',
    options: {
      transition: 'f7-parallax',
    },
  },

  // home
  {
    path: '/home/',
    componentUrl: './pages/home.html',
    name: 'home',
    options: {
      transition: 'f7-cover',
    },
  },
  // home-v2
  {
    path: '/home-v2/',
    componentUrl: './pages/home-v2.html',
    name: 'homeV2',
    options: {
      transition: 'f7-cover',
    },
  },
  // listing list view
  {
    path: '/listing-list-view/',
    componentUrl: './pages/listing-list-view.html',
    name: 'listingListView',
    options: {
      transition: 'f7-cover',
    },
  },
  // listing map view
  {
    path: '/listing-map-view/',
    componentUrl: './pages/listing-map-view.html',
    name: 'listingMapView',
    options: {
      transition: 'f7-cover',
    },
  },
  // listing map view 2
  {
    path: '/listing-map-view-2/',
    componentUrl: './pages/listing-map-view-2.html',
    name: 'listingMapView2',
    options: {
      transition: 'f7-cover',
    },
  },
  // search
  {
    path: '/search/',
    componentUrl: './pages/search.html',
    name: 'search',
    options: {
      transition: 'f7-cover',
    },
  },
  // gallery
  {
    path: '/gallery/',
    componentUrl: './pages/gallery.html',
    name: 'gallery',
    options: {
      transition: 'f7-cover',
    },
  },
  // reviews
  {
    path: '/reviews/',
    componentUrl: './pages/reviews.html',
    name: 'reviews',
    options: {
      transition: 'f7-cover',
    },
  },
  // post reviews
  {
    path: '/write-review/',
    componentUrl: './pages/write-review.html',
    name: 'writeReview',
    options: {
      transition: 'f7-cover',
    },
  },
  // cities-screen
  {
    path: '/cities-screen/',
    componentUrl: './pages/cities-screen.html',
    name: 'citiesScreen',
    options: {
      transition: 'f7-cover',
    },
  },
  // li-single
  {
    path: '/li-single/',
    componentUrl: './pages/li-single.html',
    name: 'liSingle',
    options: {
      transition: 'f7-cover',
    },
  },
  // li-single-restaurant
  {
    path: '/li-single-restaurant/',
    componentUrl: './pages/li-single-restaurant.html',
    name: 'liRestaurant',
    options: {
      transition: 'f7-cover',
    },
  },
  // li-single-event
  {
    path: '/li-single-event/',
    componentUrl: './pages/li-single-event.html',
    name: 'liEvent',
    options: {
      transition: 'f7-cover',
    },
  },
  // li-single-place
  {
    path: '/li-single-place/',
    componentUrl: './pages/li-single-place.html',
    name: 'liEvent',
    options: {
      transition: 'f7-cover',
    },
  },
  // notification
  {
    path: '/notification/',
    componentUrl: './pages/notification.html',
    name: 'notification',
    options: {
      transition: 'f7-cover',
    },
  },
  // pricing
  {
    path: '/pricing/',
    componentUrl: './pages/pricing.html',
    name: 'pricing',
    options: {
      transition: 'f7-cover',
    },
  },
  // bookmarks
  {
    path: '/bookmarks/',
    componentUrl: './pages/bookmarks.html',
    name: 'bookmarks',
    options: {
      transition: 'f7-cover',
    },
  },
  // messages
  {
    path: '/messages/',
    componentUrl: './pages/messages.html',
    name: 'messages',
    options: {
      transition: 'f7-cover',
    },
  },
  // chat
  {
    path: '/chat/',
    componentUrl: './pages/chat.html',
    name: 'chat',
    options: {
      transition: 'f7-cover',
    },
  },
  // blog-detail
  {
    path: '/blog-detail/',
    componentUrl: './pages/blog-detail.html',
    name: 'blogDetail',
    options: {
      transition: 'f7-cover',
    },
  },
  // navigation
  {
    path: '/navigation/',
    componentUrl: './pages/navigation.html',
    name: 'navigation',
    options: {
      transition: 'f7-cover',
    },
  },
  // navigation
  {
    path: '/add-list/',
    componentUrl: './pages/add-list.html',
    name: 'addList',
    options: {
      transition: 'f7-cover',
    },
  },
  // components
  {
    path: '/components/',
    componentUrl: './pages/components.html',
    name: 'components',
    options: {
      transition: 'f7-cover',
    },
  },
  // cards
  {
    path: '/cards/',
    componentUrl: './pages/cards.html',
    name: 'cards',
    options: {
      transition: 'f7-parallax',
    },
  },
  // sliders
  {
    path: '/sliders/',
    componentUrl: './pages/sliders.html',
    name: 'sliders',
    options: {
      transition: 'f7-parallax',
    },
  },
  // lists
  {
    path: '/lists/',
    componentUrl: './pages/lists.html',
    name: 'lists',
    options: {
      transition: 'f7-parallax',
    },
  },
  // pullTo Refresh
  {
    path: '/pull-to-refresh/',
    componentUrl: './pages/pull-to-refresh.html',
    name: 'pullToRefresh',
    options: {
      transition: 'f7-parallax',
    },
  },
  // google map
  {
    path: '/g-map/',
    componentUrl: './pages/g-map.html',
    name: 'gmap',
    options: {
      transition: 'f7-parallax',
    },
  },
  // google map full page
  {
    path: '/gMap-full-page/',
    componentUrl: './pages/gMap-full-page.html',
    name: 'gMapFull',
    options: {
      transition: 'f7-parallax',
    },
  },
  // google map box
  {
    path: '/gMap-box/',
    componentUrl: './pages/gMap-box.html',
    name: 'gMapBox',
    options: {
      transition: 'f7-parallax',
    },
  },
  
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
