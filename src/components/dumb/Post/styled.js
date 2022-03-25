import styled from "styled-components";
import DefaultImage from "../Image";
import DefaultRow from "../Row";
import { ReactComponent as DotsIcon } from "../../../assets/dots.svg";
import { ReactComponent as HeartsIcon } from "../../../assets/heart.svg";
import { ReactComponent as BallonIcon } from "../../../assets/balloon.svg";
import { ReactComponent as SendIcon } from "../../../assets/send.svg";
import { ReactComponent as SaveIcon } from "../../../assets/save.svg";

export const Container = styled.article`
  border: 1px solid #dbdbdb;
  width: 614px;
  margin-bottom: 24px;
`;

export const SpacedRow = styled(DefaultRow)`
  justify-content: space-between;
  align-items: center;
`;

export const FirstRow = styled(SpacedRow)`
  padding: 14px 0 14px 16px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const PostImage = styled(DefaultImage)`
  height: auto;
  width: 100%;
`;

export const UserImage = styled(DefaultImage)`
  height: 42px;
  width: 42px;
  border-radius: 100%;
  margin-right: 14px;
`;

export const Heart = styled(HeartsIcon)`
  height: 24px;
  width: 24px;
  padding: 8px;
`;

export const Ballon = styled(BallonIcon)`
  height: 24px;
  width: 24px;
  padding: 8px;
`;

export const Send = styled(SendIcon)`
  height: 24px;
  width: 24px;
  padding: 8px;
`;

export const Dots = styled(DotsIcon)`
  height: 24px;
  width: 24px;
  padding: 8px;
`;

export const Save = styled(SaveIcon)`
  height: 24px;
  width: 24px;
  padding: 8px;
`;

export const Picture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`;

export const Photo = styled.img`
  margin-top: 10px;
  height: 200px;
`;

export const Description = styled.div`
  font-size: 15px;
  margin-left: 4px;
`;

export const PastTime = styled.time`
  color: #8e8e8e;
  text-transform: uppercase;
  margin: 0;
  font-size: 12px;
  margin-top: 8px;
`;

export const Post = styled.div`
  display: flex;
  justify-content: center;
`;

export const Name = styled.span`
  white-space: nowrap;
  font-weight: bold;
`;

export const Footer = styled.div`
  padding: 0 16px 16px 16px;
`;
