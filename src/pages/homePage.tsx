import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { HouseInfoContext } from "../context/houseInfo";
import {
  InputNumber,
  Select,
  Form,
  Typography,
  Button,
  notification,
  Row,
  Col,
} from "antd";

export const HomePage = () => {
  const { houseInfo, setHouseInfo } = useContext(HouseInfoContext);
  const [model, setModel] = useState(null);
  const [price, setPrice] = useState(null);

  const { Title } = Typography;

  const legalDocumentsOptions = [
    { value: "Đã có sổ", label: "Đã có sổ" },
    { value: "Đang chờ sổ", label: "Đang chờ sổ" },
    { value: "Giấy tờ khác", label: "Giấy tờ khác" },
  ];
  const typeHouseOptions = [
    { value: "Nhà ngõ", label: "Nhà ngõ" },
    { value: "Nhà mặt phố", label: "Nhà mặt phố" },
    { value: "Nhà biệt thự", label: "Nhà biệt thự" },
    { value: "Nhà phố liền kề", label: "Nhà phố liền kề" },
  ];
  const furnitureStatusOptions = [
    { value: "Nội thất đầy đủ", label: "Nội thất đầy đủ" },
    { value: "Nội thất cao cấp", label: "Nội thất cao cấp" },
    { value: "Hoàn thiện cơ bản", label: "Hoàn thiện cơ bản" },
    { value: "Bàn giao thô", label: "Bàn giao thô" },
  ];
  const locationOptions = [
    { value: "Hà Nội", label: "Hà Nội" },
    { value: "Hồ Chí Minh", label: "Hồ Chí Minh" },
  ];
  const modelOptions = [
    { value: "decision_tree", label: "Decision Tree" },
    { value: "random_forest", label: "Random Forest" },
    { value: "xgboost", label: "XGBoost" },
    { value: "lightgbm", label: "LightGBM" },
    { value: "linear_regression", label: "Linear Regression" },
    { value: "lasso_regression", label: "Lasso Regression" },
    { value: "ridge_regression", label: "Ridge Regression" },
  ];
  const listNotify = [
    {
      message: "Data Error",
      description: "Please fill in all fields",
      duration: 2,
    },
    {
      message: "Error",
      description: "Unknown error exists",
      duration: 2,
    },
    {
      message: "Request Error",
      description: "Please check request error",
      duration: 2,
    },
  ];

  const openNotification = (index: number) => {
    notification.error(listNotify[index]);
  };
  const handleChange = (e: any, name: any) => {
    setHouseInfo({ ...houseInfo, [name]: e });
  };
  const handlePredict = async (e: any) => {
    const apiUrl = `http://127.0.0.1:8000/${model}`;
    const param = houseInfo;
    try {
      const res = await axios.post(apiUrl, param);
      if (res.status === 200) {
        const predictPrice = res.data.toFixed(3);
        setPrice(predictPrice);
      } else {
        openNotification(1);
      }
    } catch (error) {
      openNotification(2);
    }
  };

  return (
    <div className="container">
      <Title>Predict House Price Demo</Title>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 600 }}
        onFinish={handlePredict}
        onFinishFailed={(e) => openNotification(0)}
      >
        <Form.Item
          label=" Diện tích đất"
          name="Area"
          rules={[
            {
              required: true,
              message: "Please input area!",
            },
          ]}
        >
          <InputNumber
            addonAfter="m2"
            placeholder="Please input"
            min={0}
            value={houseInfo.Area || null}
            onChange={(e) => handleChange(e, "Area")}
          ></InputNumber>
        </Form.Item>
        <Form.Item
          label=" Diện tích sử dụng"
          name="Useable_area"
          rules={[
            {
              required: true,
              message: "Please input useable area!",
            },
          ]}
        >
          <InputNumber
            addonAfter="m2"
            placeholder="Please input"
            min={0}
            value={houseInfo.Useable_area || null}
            onChange={(e) => handleChange(e, "Useable_area")}
          ></InputNumber>
        </Form.Item>
        <Form.Item
          label="Số phòng ngủ"
          name="Number_of_bedroom"
          rules={[
            {
              required: true,
              message: "Please input number of bedroom!",
            },
          ]}
        >
          <InputNumber
            addonAfter="phòng"
            placeholder="Please input"
            min={0}
            value={houseInfo.Number_of_bedroom || 0}
            onChange={(e) => handleChange(e, "Number_of_bedroom")}
          ></InputNumber>
        </Form.Item>
        <Form.Item
          label="Số phòng vệ sinh"
          name="bathroomNumber"
          rules={[
            {
              required: true,
              message: "Please input number of bathroom!",
            },
          ]}
        >
          <InputNumber
            addonAfter="phòng"
            placeholder="Please input"
            min={0}
            value={houseInfo.bathroomNumber || 0}
            onChange={(e) => handleChange(e, "bathroomNumber")}
          ></InputNumber>
        </Form.Item>
        <Form.Item
          label="Tổng số tầng"
          name="floorNumber"
          rules={[
            {
              required: true,
              message: "Please input number of floor!",
            },
          ]}
        >
          <InputNumber
            addonAfter="tầng"
            placeholder="Please input"
            min={1}
            value={houseInfo.floorNumber || 1}
            onChange={(e) => handleChange(e, "floorNumber")}
          ></InputNumber>
        </Form.Item>
        <Form.Item
          label="Giấy tờ pháp lý"
          name="legalDocuments"
          rules={[
            {
              required: true,
              message: "Please select legal documents!",
            },
          ]}
        >
          <Select
            style={{ width: "100%" }}
            value={houseInfo.legalDocuments || null}
            options={legalDocumentsOptions}
            placeholder="Please select"
            onChange={(e) => handleChange(e, "legalDocuments")}
          ></Select>
        </Form.Item>
        <Form.Item
          label="Loại hình nhà ở"
          name="Type_of_house"
          rules={[
            {
              required: true,
              message: "Please select type of houses!",
            },
          ]}
        >
          <Select
            style={{ width: "100%" }}
            value={houseInfo.Type_of_house || null}
            options={typeHouseOptions}
            placeholder="Please select"
            onChange={(e) => handleChange(e, "Type_of_house")}
          ></Select>
        </Form.Item>
        <Form.Item
          label="Tình trạng nội thất"
          name="furnitureStatus"
          rules={[
            {
              required: true,
              message: "Please select furniture status!",
            },
          ]}
        >
          <Select
            style={{ width: "100%" }}
            value={houseInfo.furnitureStatus || null}
            options={furnitureStatusOptions}
            placeholder="Please select"
            onChange={(e) => handleChange(e, "furnitureStatus")}
          ></Select>
        </Form.Item>
        <Form.Item
          label="Địa chỉ"
          name="location"
          rules={[
            {
              required: true,
              message: "Please select location!",
            },
          ]}
        >
          <Select
            style={{ width: "100%" }}
            value={houseInfo.location || null}
            options={locationOptions}
            placeholder="Please select"
            onChange={(e) => handleChange(e, "location")}
          ></Select>
        </Form.Item>
        <Form.Item
          label="Lựa chọn Model"
          name="model"
          rules={[
            {
              required: true,
              message: "Please select model!",
            },
          ]}
        >
          <Select
            style={{ width: "100%" }}
            value={model || null}
            options={modelOptions}
            placeholder="Please select"
            onChange={(e) => setModel(e)}
          ></Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Row>
        <Col span={8}>
          <Title>Price:</Title>
        </Col>
        <Col span={16}>
          <Title>
            {Number(price) < 1000 ? `${Number(price).toFixed()} triệu VNĐ` : `${(Number(price) / 1000).toFixed(3)} tỷ VNĐ`}
          </Title>
        </Col>
      </Row>
    </div>
  );
};
