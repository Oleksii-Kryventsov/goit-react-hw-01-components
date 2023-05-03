import PropTypes from 'prop-types';
import {Name, Avatar, ProfileCard, Tag, Location, Stats, StatsItem, Label, Quantity} from './Profile.styled'


export const Profile = ({ avatar, username, tag, location, stats }) => {
    return (
        <ProfileCard>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </StatsItem>
            </Stats>
        </ProfileCard>
    )
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number)
};