import PropTypes from 'prop-types';

export const Result = {
  aliases: PropTypes.string,
  api_detail_url: PropTypes.string.isRequired,
  cover_date: PropTypes.string.isRequired,
  date_added: PropTypes.string.isRequired,
  date_last_updated: PropTypes.string.isRequired,
  deck: PropTypes.string,
  description: PropTypes.string.isRequired,
  has_staff_review: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.shape({
    icon_url: PropTypes.string.isRequired,
    medium_url: PropTypes.string.isRequired,
    screen_url: PropTypes.string.isRequired,
    screen_large_url: PropTypes.string.isRequired,
    small_url: PropTypes.string.isRequired,
    super_url: PropTypes.string.isRequired,
    thumb_url: PropTypes.string.isRequired,
    tiny_url: PropTypes.string.isRequired,
    original_url: PropTypes.string.isRequired,
    image_tags: PropTypes.string.isRequired,
  }).isRequired,
};
