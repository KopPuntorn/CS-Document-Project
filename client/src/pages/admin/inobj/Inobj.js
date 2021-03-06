import React, { useState, useEffect } from 'react';
import SearchBox from '../../../components/UserComponent/SearchBox/SearchBox';
import { ConfigProvider, DatePicker, Button, Table, Radio, Image } from 'antd';
import locale from 'antd/lib/locale/th_TH';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import DownloadLink from "react-download-link";
import { getInObj } from '../../../functions/inobj';
import { getOutObj } from '../../../functions/outobj';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PlusOutlined } from '@ant-design/icons';
import '../upload1.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import download from 'downloadjs';
import moment from 'moment';

const Inmoney = () => {
    const [searchText, setSearchText] = useState('');
    const [searchNo, setSearchNo] = useState('');
    const [searchFrom, setSearchFrom] = useState('');
    const { RangePicker } = DatePicker;
    const [hackValue, setHackValue] = useState();
    const [dates, setDates] = useState([]);
    const [value, setValue] = useState();
    const [person, setPerson] = useState([]);
    const [person1, setPerson1] = useState([]);
    const { user } = useSelector((state) => ({ ...state }))
    const [game, setGame] = useState('card')
    const [errorMsg, setErrorMsg] = useState('');
    const [dDate, setdDate] = useState(moment(new Date("2018-09-12")));
    const [rDate, setrDate] = useState(moment(new Date()));

    const handleClick = (gameState) => {
        setGame(gameState)
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
  

    useEffect(() => {
        loadPerson(user.token);
      }, [])
    
      const loadPerson = (authtoken) => {
        getInObj(authtoken)
            .then((res) => {
                setPerson(res.data)
                console.log(res.data)
            }).catch((err) => {
                toast.error(err)
                console.log(err)
            })
    }

    useEffect(() => {
        loadPerson1(user.token);
      }, [])
      const loadPerson1 = (authtoken) => {
        getOutObj(authtoken)
            .then((res) => {
                setPerson1(res.data)
                console.log(res.data)
            }).catch((err) => {
                toast.error(err)
                console.log(err)
            })
    }

    if ( dDate === null ) {
      setdDate(new Date("2018-09-12"));
  }
  if (rDate === null ) {
    setrDate(new Date());
  }




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
        } else {
          setHackValue(undefined);
        }
      };
      const columns = [

        {
          title: '??????????????????',
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
          title: '??????????????????',
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
          title: '?????????',
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
          title: '????????????????????????',
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
          title: '?????????',
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
          title: '?????????',
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
          title: '??????????????????',
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
            title: '???????????????????????????',
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
            title: '??????????????????????????????',
            render: (record) => (
                <>
                
                    <a href={`https://backyard-ewdetiojvq-as.a.run.app/uploads/${record.pic}`} target="_blank" >
                    ?????????????????????????????? 
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


  return <div>
      <div className='SearchBar'><div className='headsearch'>???????????????</div>
        <div className="search11"> 
        ?????????????????? 
        <DatePicker 
            selected={dDate} 
            onChange={date => setdDate(date)} 
            placeholder= "?????????????????????????????????"
        />?????????<DatePicker 
        selected={rDate} 
        onChange={date => setrDate(date)} 
        placeholder= "??????????????????????????????"
      /></div>
        <div className="search22">?????????????????????????????? <SearchBox value={searchText} onValueChange={setSearchText} placeholder="?????????????????????"/></div>
        <div className="search33">????????? <SearchBox value={searchNo} onValueChange={setSearchNo} placeholder="?????????"/></div>
        <div className="search44">????????? <SearchBox value={searchFrom} onValueChange={setSearchFrom} placeholder="?????????????????????"/>
        <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a" onClick={ () => handleClick('card')}>?????????????????????</Radio.Button>
            <Radio.Button value="b" onClick={ () => handleClick('playing')}>??????????????????</Radio.Button>
        </Radio.Group></div>
        </div>
        {(() => {
        switch (game) {
          case 'card':
            return <div><div className="search55"><div className="headbtn">?????????????????????????????????????????????????????????</div><Link to="/admin/upload3/upfrom" className="outbtn">
            <button className="btnadd">+ ??????????????????????????????????????????????????????</button></Link></div><div><Table columns={columns} dataSource={filteredData} rowKey="_id" className="upload-table" defaultPageSize= "2"/></div></div>
          case 'playing':
            return <div><div className="search55"><div className="headbtn">??????????????????????????????????????????????????????</div><Link to="/admin/upload3/upfrom2" className="outbtn">
            <button className="btnadd">+ ???????????????????????????????????????????????????</button></Link></div><div><Table columns={columns} dataSource={filteredData1} rowKey="_id" className="upload-table" defaultPageSize= "2"/></div></div>
          default:
            return null
        }
      })()}
        
      </div>;
};

export default Inmoney

