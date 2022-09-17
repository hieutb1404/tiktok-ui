import Config from '~/config';
//Layouts
import HeaderOnly from '~/layouts/HeaderOnly';
//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
//@ là cố dịnh, còn nickname có thể thay đổi theo nhiều nickname khác nhau
//cứ có @: hay nickname thì nó sẽ lọt vào profile
// cái nickname thì nên đặt giống data API
/**  vì mình đặt kí hiệu link có  @ ở file account nên path
 *  ở đây cùng phải là @
 * khi đó 2 kí tự @ khớp nhau thì link account mới vào đc profile
 */
const publicRoutes = [
    { path: Config.routes.home, component: Home },
    { path: Config.routes.following, component: Following },
    { path: Config.routes.live, component: Live },
    { path: Config.routes.profile, component: Profile },
    { path: Config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: Config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
