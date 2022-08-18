import {Info} from './Info';
import PropTypes from 'prop-types';

export const Stats = ( {followers, views, likes}) => {
    return <ul>
      <Info label={`Followers`} quantity={followers}/>
      <Info label={`Views`} quantity={views}/>
      <Info label={`Likes`} quantity={likes}/>
    </ul>
}
Stats.propTypes = {
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
  })
}