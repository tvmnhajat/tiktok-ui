import classNames from 'classnames/bind';
import styles from './header.module.scss';
import images from '~/assets/images';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const cx = classNames.bind(styles)

function Header(){
    return <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Tiktok'></img>
                </div>
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false}></input>

                    <button className={cx('clear')}>
                        {/* clear */}
                        <FontAwesomeIcon icon = {faCircleXmark} />
                    </button>
                    <FontAwesomeIcon icon = { faSpinner } className={cx('loading')}/>
                    <button className={cx('search-btn')}>
                        {/* Search */}
                        <FontAwesomeIcon icon = {faMagnifyingGlass } />
                    </button>
                </div>
                <div className={cx('actions')}></div>
            </div>

        </header>
}

export default Header;