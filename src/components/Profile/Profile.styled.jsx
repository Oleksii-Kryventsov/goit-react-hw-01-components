import styled from 'styled-components';

export const ProfileCard = styled.div`
    width: 400px;
    margin: 24px auto;
    text-align: center;
    padding: 15px;
    border: solid 1px rgb(68, 68, 68);
`;

export const Avatar = styled.img`
 width: 100%;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), -23px 0 20px -23px rgba(0, 0, 0, 0.8), 23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
`;

export const Name = styled.p`
    font-weight: 700;
    font-size: 28px;
`;

export const Tag = styled.p``;

export const Location = styled.p``;

export const Stats = styled.ul`
    display: flex;
    padding: 0;
    justify-content: center;
    gap: 30px;
`;

export const StatsItem = styled.li``;

export const Label = styled.span`
    font-weight: 700;
    font-size: 17px;
`;

export const Quantity = styled.span`
    display: block;
    color: rgb(233, 76, 37);
    font-weight: 600;
`;

