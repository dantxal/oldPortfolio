import React from 'react';
import PropTypes from 'prop-types';
import { FaWhatsapp } from 'react-icons/fa';

import {
  Wrapper,
  Content,
  Header,
  Title,
  SubTitle,
  Item,
  User,
  UserInfo,
  PictureImg,
  Name,
  Status,
  WhatsBtn,
} from './styles';

function Whats(props) {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>Ola bonita!</Title>
          <SubTitle>Em qual area voce deseja atendimento?</SubTitle>
        </Header>
        <Item>
          <User>
            <PictureImg />
            <UserInfo>
              <Name>Avaliacao</Name>
              <Status>online</Status>
            </UserInfo>
          </User>
          <WhatsBtn href="https://wa.me/5561982366017">
            <FaWhatsapp size="20" color="white" />
            Whatsapp
          </WhatsBtn>
        </Item>
        <Item>
          <User>
            <PictureImg />
            <UserInfo>
              <Name>Lazara Simone</Name>
              <Status>online</Status>
            </UserInfo>
          </User>
          <WhatsBtn href="https://wa.me/5561981019342">
            <FaWhatsapp size="20" color="white" />
            Whatsapp
          </WhatsBtn>
        </Item>
        <Item>
          <User>
            <PictureImg />
            <UserInfo>
              <Name>Andre Teixeira</Name>
              <Status>online</Status>
            </UserInfo>
          </User>
          <WhatsBtn href="https://wa.me/5561993941693">
            <FaWhatsapp size="20" color="white" />
            Whatsapp
          </WhatsBtn>
        </Item>
      </Content>
    </Wrapper>
  );
}

Whats.propTypes = {};

export default Whats;
