// import Header from '~/Layout/DefaulLayout/Header';
import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import SideBar from '~/components/Layout/DefaulLayout/SideBar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles)

function DefaultLayout({ children }){
    return (<div>
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
        
    </div>)
}

export default DefaultLayout;