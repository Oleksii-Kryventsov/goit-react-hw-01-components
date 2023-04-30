import PropTypes from 'prop-types';
import { getRandomHexColor } from './getRandomHexColor';
import css from './statistics.module.css';

export const StatItem = ({ label, percentage }) => {
    return (
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    );
};

StatItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

   