import React, { useState, useEffect } from 'react';
import SearchBox from '../../components/UserComponent/SearchBox/SearchBox';
import { ConfigProvider, DatePicker, Button, Table, Radio, Image } from 'antd';
import download from 'downloadjs';
import { getPerson,downloadPerson } from '../../functions/person';
import { getOutPerson } from '../../functions/outperson';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import './upload1.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const Upload1 = () => {
    const [searchText, setSearchText] = useState('');
    const [searchNo, setSearchNo] = useState('');
    const [searchFrom, setSearchFrom] = useState('');
    const { RangePicker } = DatePicker;
    const [hackValue, setHackValue] = useState();
    const [dates, setDates] = useState([]);
    const [value, setValue] = useState();
    const [person, setPerson] = useState([]);
    const { user } = useSelector((state) => ({ ...state }))
    const [person1, setPerson1] = useState([]);
    const [game, setGame] = useState('card');
    const [errorMsg, setErrorMsg] = useState('');
    const [dDate, setdDate] = useState(moment(new Date("2018-09-12")));
    const [rDate, setrDate] = useState(moment(new Date()));
    

    useEffect(() => {
        loadPerson(user.token);
      }, []) 
    
      const loadPerson = (authtoken) => {
        getPerson(authtoken)
            .then((res) => {
                setPerson(res.data)
                console.log(res.data) 
            }).catch((err) => {
                toast.error(err)
                console.log(err)
            })
    }

    const handleClick = (gameState) => {
        setGame(gameState)
      }

      useEffect(() => {
        loadPerson1(user.token);
      }, [])

      const loadPerson1 = (authtoken) => {
        getOutPerson(authtoken)
            .then((res) => {
                setPerson1(res.data)
                console.log(res.data)
            }).catch((err) => {
                toast.error(err)
                console.log(err)
            })
    }



    const downloadFile = async (id, path, mimetype) => {
      try {
        const result = await axios.get(`https://backyard-ewdetiojvq-as.a.run.app/uploads/${id}`, {
          responseType: 'blob'
        });
        const split = path.split('/');
        const filename = split[split.length - 1];
        setErrorMsg('');
        return download(result.data, filename, mimetype);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setErrorMsg('Error while downloading file. Try again later');
        }
      }
    };




    const disabledDate = current => {
        if (!dates || dates.length === 0) {
          return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
        return tooEarly || tooLate;
      };


      const onOpenChange = open => {
        if (open) {
          setHackValue([]);
          setDates([]);
          console.log(value)
        } else {
          setHackValue(undefined);
        }
      };
      const columns = [

        {
            title: 'วันที่',
            dataIndex: 'dateFirst',
            key: 'dateFirst',
            sorter: (a, b) => {
              if (a.dateFirst > b.dateFirst) {
                  return 1;
              }
              if (b.dateFirst > a.dateFirst) {
                  return -1;
              }
              return 0;
           }
        },
        {
            title: 'เลขรับ',
            dataIndex: 'numTo',
            key: 'numTo',
            sorter: (a, b) => {
              if (a.numTo > b.numTo) {
                  return 1;
              }
              if (b.numTo > a.numTo) {
                  return -1;
              }
              return 0;
           }
        },
        {
            title: 'ที่',
            dataIndex: 'locate',
            key: 'locate',
            sorter: (a, b) => {
              if (a.locate > b.locate) {
                  return 1;
              }
              if (b.locate > a.locate) {
                  return -1;
              }
              return 0;
           }
        },
        {
            title: 'ลงวันที่',
            dataIndex: 'dateGen',
            key: 'dateGen',
            sorter: (a, b) => {
              if (a.dateGen > b.dateGen) {
                  return 1;
              }
              if (b.dateGen > a.dateGen) {
                  return -1;
              }
              return 0;
           }
            
        },
        {
            title: 'จาก',
            dataIndex: 'from',
            key: 'from',
            sorter: (a, b) => {
              if (a.from > b.from) {
                  return 1;
              }
              if (b.from > a.from) {
                  return -1;
              }
              return 0;
           }
        },
        {
            title: 'ถึง',
            dataIndex: 'to',
            key: 'to',
            sorter: (a, b) => {
              if (a.to > b.to) {
                  return 1;
              }
              if (b.to > a.to) {
                  return -1;
              }
              return 0;
           }
        },{
            title: 'เรื่อง',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => {
              if (a.name > b.name) {
                  return 1;
              }
              if (b.name > a.name) {
                  return -1;
              }
              return 0;
            }
        },
        {
            title: 'ดาวน์โหลด',
            render: (record) => (
              <a
              onClick={() =>
                downloadFile(record.pic, record.file_path, record.file_mimetype)
              }
            > Download
            </a>
            )
        },
        {
            title: 'รายละเอียด',
            render: (record) => (
                <>
                    <a href={`https://backyard-ewdetiojvq-as.a.run.app/uploads/${record.pic}`} target="_blank" >
                    รายละเอียด 
                    </a>
                </>
            )
        }
    ]

    const filteredData = person.filter((CardData) => CardData.name.includes(searchText)).filter((CardData) => CardData.locate.includes(searchNo)).filter((CardData) => CardData.from.includes(searchFrom)).filter((CardData) => {
      return rDate >= moment(CardData.date) && dDate <= moment(CardData.date)
    })
    const filteredData1 = person1.filter((CardData) => CardData.name.includes(searchText)).filter((CardData) => CardData.locate.includes(searchNo)).filter((CardData) => CardData.from.includes(searchFrom)).filter((CardData) => {
      return rDate >= moment(CardData.date) && dDate <= moment(CardData.date)
    })

  if ( dDate === null ) {
      setdDate(new Date("2018-09-12"));
  }
  if (rDate === null ) {
    setrDate(new Date());
  }

  return <div>
      <div className='SearchBar'><div className='headsearch'>ค้นหา</div>
        <div className="search11">วันที่ 
        <DatePicker 
            selected={dDate} 
            onChange={date => setdDate(date)} 
            placeholder= "วันเริ่มต้น"
        />ถึง<DatePicker 
        selected={rDate} 
        onChange={date => setrDate(date)} 
        placeholder= "วันสิ้นสุด"
      /></div>
        <div className="search22">ใส่คำค้นหา <SearchBox value={searchText} onValueChange={setSearchText} placeholder="คำค้นหา"/></div>
        <div className="search33">ที่ <SearchBox value={searchNo} onValueChange={setSearchNo} placeholder="ที่"/></div>
        <div className="search44">จาก <SearchBox value={searchFrom} onValueChange={setSearchFrom} placeholder="ระบุจาก"/>
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a" onClick={ () => handleClick('card')}>รับเข้า</Radio.Button>
            <Radio.Button value="b" onClick={ () => handleClick('playing')}>ส่งออก</Radio.Button>
        </Radio.Group></div>
        </div>
        {(() => {
        switch (game) {
          case 'card':
            return <div><div className="search55"><div className="headbtn">รายการรับเข้าเอกสาร</div><Link to="/admin/upload1/upfrom" className="outbtn">
            <button className="btnadd">+ เพิ่มรับเข้าเอกสาร</button></Link></div><div><Table columns={columns} dataSource={filteredData} rowKey="_id" className="upload-table" defaultPageSize= "2"/></div></div>
          case 'playing':
            return <div><div className="search55"><div className="headbtn">รายการส่งออกเอกสาร</div><Link to="/admin/upload1/upfrom2" className="outbtn">
            <button className="btnadd">+ เพิ่มส่งออกเอกสาร</button></Link></div><div><Table columns={columns} dataSource={filteredData1} rowKey="_id" className="upload-table" defaultPageSize= "2"/></div></div>
          default:
            return null
        }
      })()}
        
      </div>;
};

export default Upload1

