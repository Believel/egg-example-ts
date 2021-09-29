import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index);
  router.get('/example', controller.example.userInfo);
  router.get('/api/user/repos', controller.example.userRepos);
};
