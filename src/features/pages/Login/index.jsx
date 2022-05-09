import { Col } from "antd";
import { IMAGES } from "assets";
import React from "react";
import {
  Container,
  Content,
  Image,
  WrapperImage,
  Title,
  Input,
  BaseForm,
  BaseButton,
} from "./styled";
import { validateModel } from "./validate";

const LoginPage = () => {
  const validate = validateModel();
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Container>
      <Content>
        <Col span={12}>
          <Image src={IMAGES.BG_LOGIN} />
        </Col>
        <Col span={12}>
          <WrapperImage>
            <Image src={IMAGES.LOGO} width={120} height={120} />
          </WrapperImage>
          <Title level={4}>Login</Title>

          <BaseForm onFinish={handleSubmit}>
            <BaseForm.Item rules={validate.email} name="email">
              <Input placeholder={"Email"} />
            </BaseForm.Item>
            <BaseForm.Item rules={validate.password} name="password">
              <Input.Password
                style={{ height: "40px" }}
                placeholder={"Password"}
              />
            </BaseForm.Item>

            <BaseForm.Item>
              <BaseButton htmlType="submit" type="primary">
                Submit
              </BaseButton>
            </BaseForm.Item>
          </BaseForm>
        </Col>
      </Content>
    </Container>
  );
};
export default LoginPage;
