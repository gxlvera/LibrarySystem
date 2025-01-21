
import {Layout as AntdLayout, Button, Col, Form, Input, Row, Select, Space} from 'antd'

const {Content} = AntdLayout

export default function Home() {
  const [form] = Form.useForm()
  const handleSearchFinish =(values)=>{
    
  }

  const handleSearchReset = ()=>{
    form.resetFields()
  }
  return (
    <>
    <Form
      name="search"
      form={form}
      onFinish={handleSearchFinish}
      initialValues={{
        name:'',
        author:'',
        category:''
      }}
    >
      <Row gutter={24} >
        <Col span={5}>
          <Form.Item name="name" label="Book Name" >
            <Input placeholder='Book Name' allowClear/>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name="author" label="Author Name" >
            <Input placeholder = 'Author' allowClear/>
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name="category" label="Category" >
            <Select 
            allowClear
            showSearch
            placeholder="Please select"
             options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}/>
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item>
            <Space>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button  htmlType="submit" onClick={handleSearchReset}>
              Clear
            </Button>
            </Space>
          </Form.Item>
        </Col>
      </Row>
    </Form>
      
    </>

  );
}
