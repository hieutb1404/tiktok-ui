//Layouts
import { HeaderOnly } from '~/components/Layout';
//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//@ là cố dịnh, còn nickname có thể thay đổi theo nhiều nickname khác nhau
//cứ có @: hay nickname thì nó sẽ lọt vào profile
// cái nickname thì nên đặt giống data API
/**  vì mình đặt kí hiệu link có  @ ở file account nên path
 *  ở đây cùng phải là @
 * khi đó 2 kí tự @ khớp nhau thì link account mới vào đc profile
 */
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
