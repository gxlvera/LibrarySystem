
import {Layout as AntdLayout, Button, Form, Input, Select, Space} from 'antd'

const {Content} = AntdLayout

export default function Home() {
  const handleSearchFinish =()=>{


  }
  return (
    <>
    <Form
      name="customized_form_controls"
      layout="inline"
      onFinish={handleSearchFinish}
      initialValues={{
        price: {
          number: 0,
          currency: 'rmb',
        },
      }}
    >
      <Form.Item name="booknName" label="Book Name" >
        <Input placeholder='Book Name' allowClear/>
      </Form.Item>
      <Form.Item name="authorName" label="Author Name" >
        <Input placeholder = 'Author' allowClear/>
      </Form.Item>
      <Form.Item name="category" label="Category" >
        <Select allowClear options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}/>
      </Form.Item>
      <Form.Item>
        <Space>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
        <Button  htmlType="submit">
          Clear
        </Button>
        </Space>
      </Form.Item>
    </Form>
      
    </>

  );
}
