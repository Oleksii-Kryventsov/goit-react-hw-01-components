import PropTypes from 'prop-types';
import css from './statistics.module.css'
import { StatItem } from './StatItem';

export const Statistics = ({ title, stats }) => {
    return (
        <div className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>
                {stats.map(({ id, label, percentage }) => (<StatItem key={id} label={label} percentage={percentage}/>))}
            </ul>
        </div>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
};