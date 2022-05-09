import styled from "styled-components";
import { BaseImage, BaseTitle, BaseInput } from "atoms";
import { Form, Row, Button } from "antd";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
`;
export const Content = styled(Row)`
  display: flex;
  width: 1000px;
  min-height: 500px;
  background: #fff;
  border-radius: 2px;
  .ant-image {
    display: initial;
  }
`;
export const Image = styled(BaseImage)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled(BaseTitle)`
  padding-left: 20px;
`;
export const Input = styled(BaseInput)`
  height: 40px;
`;
export const BaseForm = styled(Form)`
  margin: 0 20px;
  .ant-form-item-explain-error {
    font-size: 10px;
  }
`;
export const BaseButton = styled(Button)`
  width: 100%;
  height: 40px;
`;
export const BaseText = styled.div`
  ${(props) => props.$bold && `font-weight: 600; cursor: pointer;`}
`;

export const WrapperLink = styled.div`
  text-align: center;
  margin-top: 20px;
`;
