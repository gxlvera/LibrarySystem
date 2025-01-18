
import {Layout as AntdLayout, Button, Form, Input, Select, Space} from 'antd'

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
      layout="inline"
      onFinish={handleSearchFinish}
      initialValues={{
        name:'',
        author:'',
        category:''
      }}
    >
      <Form.Item name="name" label="Book Name" >
        <Input placeholder='Book Name' allowClear/>
      </Form.Item>
      <Form.Item name="author" label="Author Name" >
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
        <Button  htmlType="submit" onClick={handleSearchReset}>
          Clear
        </Button>
        </Space>
      </Form.Item>
    </Form>
      
    </>

  );
}
