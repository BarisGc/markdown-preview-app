import { useSelector, useDispatch } from 'react-redux';
import { isClicked, changeIsClicked } from '../redux/markdownTextSlice';

function Header() {
    const dispatch = useDispatch();
    const clicked = useSelector(isClicked)

    function handleClick() {
        dispatch(changeIsClicked(!clicked));
    }

    return (
        <div className="header d-flex justify-content-center py-1 mb-4">
            <h1 className="headerTitle pt-2">Markdown Previewer</h1>
            <span className="headerIcon" onClick={handleClick}>?</span>
        </div>
    )
}

export default Header