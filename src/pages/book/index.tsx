
import {Layout as AntdLayout, Button, Col, Form, Input, Row, Select, Space, Table, TablePaginationConfig} from 'antd'
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './index.module.css'
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
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },

  
];

const COLUMNS = [
  {
    title: 'Book Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Cover',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Author',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Category',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Description',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Inventory',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Created time',
    dataIndex: 'address',
    key: 'address',
  }, 
];


export default function Home() {
  const [form] = Form.useForm()
  const router = useRouter()

  const [pagination, setPagination] = useState({
    current:1,
    pageSize:5,
    showSizeChanger:true,
    total:0
  })



  const handleSearchFinish =(values)=>{
    
  }

  const handleSearchReset = ()=>{
    form.resetFields()
  }

  const handleBookEdit = ()=>{
    router.push('/book/edit/id')
  }

  const handleTableChange = (pagination: TablePaginationConfig)=>{

    console.log(pagination)
    setPagination(pagination)
  }

  const columns=[...COLUMNS,
    {
      title:'Action',key:"action",render:(_ :any,row:any)=>{
      return <>
        <Space>
        <Button type='link' onClick={handleBookEdit}>Edit</Button>
        <Button type='link' danger>Delete</Button>
        </Space>
      </>
      }
    }
  ]
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
    <div className = {styles.tableWrap}>

      <Table 
       dataSource={dataSource} 
       columns={columns} 
       scroll={{x:1000}}
       onChange={handleTableChange}
       pagination={{...pagination,showTotal:()=> {return `Total: ${pagination.total} records`}}}
       />
    </div>

    
    </>

  );
}
