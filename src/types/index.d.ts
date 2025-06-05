declare module '@strapi/strapi' {
  interface ContentType {
    'api::home-page.home-page': {
      kind: 'singleType';
      collectionName: 'home_pages';
      info: {
        singularName: 'home-page';
        pluralName: 'home-pages';
        displayName: 'Home Page';
        description: 'Home page content';
      };
      options: {
        draftAndPublish: true;
      };
      pluginOptions: {
        i18n: {
          localized: true;
        };
      };
      attributes: {
        Title1: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Description1: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Title2: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Description2: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Title3: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Description3: {
          type: 'richtext';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Title4: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Title5: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Description5: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Title6: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Description6: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Title7: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Description7: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Title8: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Description8: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        PhysicalCard: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        PhysicalCardDescription: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        DigitalCard: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        DigitalCardDescription: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        Shariah: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
        ShariahDescription: {
          type: 'string';
          pluginOptions: {
            i18n: {
              localized: true;
            };
          };
        };
      };
    };
  }
} 