
import {Layout as AntdLayout, Button, Col, Form, Input, Row, Select, Space, Table} from 'antd'

const {Content} = AntdLayout

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];


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

    <Table dataSource={dataSource} columns={columns} />
      
    </>

  );
}
