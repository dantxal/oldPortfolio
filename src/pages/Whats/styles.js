import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #fafafa;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 400px;
  border-radius: 8px;
  margin: 25px 0;
  background: #dadada;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  margin-top: 20px;
  width: 80%;
  color: #444;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const SubTitle = styled.div``;

export const Item = styled.div`
  padding: 12px;
  background: #fff;
  width: 90%;
  margin-top: 30px;
  border-radius: 8px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserInfo = styled.div`
  margin-left: 15px;
`;

export const PictureImg = styled.div`
  background: #ddd;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const Status = styled.div`
  color: #aaa;
  font-size: 14px;
`;

export const WhatsBtn = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #25d366;
  color: white;
  font-size: 16px;
  padding: 8px 4px;
  border-radius: 40px;
  margin-top: 15px;
  width: 100%;

  svg {
    margin-right: 8px;
  }
`;
