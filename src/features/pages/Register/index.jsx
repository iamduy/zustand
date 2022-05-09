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
import { useHistory } from "react-router-dom";
const RegisterPage = () => {
  const validate = validateModel();
  const router = useHistory();
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
          <Title level={4}>Register</Title>

          <BaseForm onFinish={handleSubmit}>
            <BaseForm.Item rules={validate.email} name="email">
              <Input placeholder={"E-mail"} />
            </BaseForm.Item>
            <BaseForm.Item rules={validate.username} name="username">
              <Input placeholder={"username"} />
            </BaseForm.Item>
            <BaseForm.Item rules={validate.name} name="name">
              <Input placeholder={"name"} />
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
              <BaseButton
                style={{ marginTop: "5px" }}
                onClick={() => router.push("/login")}
              >
                Back
              </BaseButton>
            </BaseForm.Item>
          </BaseForm>
        </Col>
      </Content>
    </Container>
  );
};
export default RegisterPage;
