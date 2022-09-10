import PropsTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}
Wrapper.propsTypes = {
    children: PropsTypes.node.isRequired,
    className: PropsTypes.string,
};
export default Wrapper;
