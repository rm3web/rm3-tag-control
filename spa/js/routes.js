import Home from './components/Home';
import Layout from './components/Layout';
import ApiDocs from './components/ApiDocs';
import NotFound from './components/NotFound';
import TagsExample from './components/ApiDocs/Tags';
import TagInputExample from './components/ApiDocs/TagInput';

const routes = {
  component: Layout,
  childRoutes: [
    { path: '/', component: Home },
    { path: '/index.html', onEnter: (nextState, replaceState) => replaceState(null, '/') },
    {
      path: '/api_docs',
      component: ApiDocs,
      childRoutes: [
        {
          path: 'tags',
          component: TagsExample,
        },
        {
          path: 'tag_input',
          component: TagInputExample,
        },
      ],
    },
    { path: '*', component: NotFound },
  ],
};

export default routes;
