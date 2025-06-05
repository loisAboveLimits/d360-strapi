declare module '@strapi/strapi' {
    export const factories: {
      createCoreController: (uid: string) => any;
      createCoreService: (uid: string) => any;
      createCoreRouter: (uid: string) => any;
    };
  }