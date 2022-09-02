import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
<<<<<<< HEAD
=======

>>>>>>> a23311dee131d144f7e8ed8a1f31cee639ee3a0e
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

<<<<<<< HEAD
import * as searchServices from '~/apiServices/searchServices';

=======
>>>>>>> a23311dee131d144f7e8ed8a1f31cee639ee3a0e
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');

    const [searchResult, setSearchResult] = useState([]);

    const [showResult, setShowResult] = useState(true);

    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
<<<<<<< HEAD
    // mặc định lần đầu tiên là rỗng
=======

>>>>>>> a23311dee131d144f7e8ed8a1f31cee639ee3a0e
    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        // không có searchValue thì thoát hàm để tránh lỗi
        // không có ở đây là ko nhập gì
        /** vì dữ liệu API là 1 trường bắt buộc là q chứ không phải
        để chuỗi rỗng như useState đã xét ở trên */
        // trim để bỏ dấu cách để tránh lỗi và ko tìm kiếm
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
<<<<<<< HEAD
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };
        fetchApi();
=======
        setLoading(true);

        fetch(
            `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                debounced,
            )}&type=less`,
        )
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            // mất mạng mất wifi thì để nó dừng luôn
            // lỗi sẽ đưa vào catch
            .catch(() => {
                setLoading(false);
            });
>>>>>>> a23311dee131d144f7e8ed8a1f31cee639ee3a0e
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue.trim() === '' ? '' : searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck="false"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {/* {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )} */}
                {loading && (
                    <FontAwesomeIcon
                        className={cx('loading')}
                        icon={faSpinner}
                    />
                )}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
