export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'admin',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Admin Control', // menu title
            icon: 'ion-android-star', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'pmreport',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Prime Minister Report', // menu title
            icon: 'ion-document-text', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'agency',
        data: {
          menu: {
            title: 'Contact Agency',
            icon: 'ion-android-call',
            selected: false,
            expanded: false,
            order: 100,
          }
        }
      },
      
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Report',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'Report List',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'Send a Report',
              }
            }
          }
        ]
      },
      
      {
        path: 'maps',
        data: {
          menu: {
            title: 'Maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        }/*,
        children: [
          {
            path: 'denguemaps',
            data: {
              menu: {
                title: 'Dengue Map',
              }
            }
          },
          
          {
            path: 'hazemaps',
            data: {
              menu: {
                title: 'Haze (PM 2.5) Maps',
              }
            }
          },
          
        ]*/
      },
      {
        path: '',
        data: {
          menu: {
            title: 'Account',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'Login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'Register'
              }
            }
          }
        ]
      },

      {
        path: '',
        data: {
          menu: {
            title: 'External Link',
            url: 'http://155.69.100.27/3003S217_SupperBojio/index.php/Main_Page',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
