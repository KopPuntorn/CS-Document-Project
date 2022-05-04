import React, { useState, useEffect } from 'react';
import SearchBox from '../../../components/UserComponent/SearchBox/SearchBox';
import { ConfigProvider, DatePicker, Button, Table, Radio, Image, Tag, Space, Pagination, Row } from 'antd';
import locale from 'antd/lib/locale/th_TH';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import DownloadLink from "react-download-link";
import { getInSubj } from '../../../functions/insubj';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './sum.css'
import { getDocByMonthInPerson, getDocByDayInPerson, getDocByYearInPerson, getDocByWeekInPerson, getDocByDayInPersonSpecial, 
    getDocByDayOutPerson, getDocByMonthOutPerson, getDocByYearOutPerson, getDocByWeekOutPerson, getDocByDayOutPersonSpecial } from '../../../functions/summary';

import { getDocByMonthInMoney, getDocByDayInMoney, getDocByYearInMoney, getDocByWeekInMoney, getDocByDayInMoneySpecial, 
    getDocByDayOutMoney, getDocByMonthOutMoney, getDocByYearOutMoney, getDocByWeekOutMoney, getDocByDayOutMoneySpecial } from '../../../functions/summary';

import { getDocByMonthInObj, getDocByDayInObj, getDocByYearInObj, getDocByWeekInObj, getDocByDayInObjSpecial,
    getDocByDayOutObj, getDocByMonthOutObj, getDocByYearOutObj, getDocByWeekOutObj, getDocByDayOutObjSpecial } from '../../../functions/summary';

import { getDocByMonthInRes, getDocByDayInRes, getDocByYearInRes, getDocByWeekInRes, getDocByDayInResSpecial,
    getDocByDayOutRes, getDocByMonthOutRes, getDocByYearOutRes, getDocByWeekOutRes, getDocByDayOutResSpecial } from '../../../functions/summary';

import { getDocByMonthInPlan, getDocByDayInPlan, getDocByYearInPlan, getDocByWeekInPlan, getDocByDayInPlanSpecial,
    getDocByDayOutPlan, getDocByMonthOutPlan, getDocByYearOutPlan, getDocByWeekOutPlan, getDocByDayOutPlanSpecial } from '../../../functions/summary';    

import { getDocByMonthInReso, getDocByDayInReso, getDocByYearInReso, getDocByWeekInReso, getDocByDayInResoSpecial,
    getDocByDayOutReso, getDocByMonthOutReso, getDocByYearOutReso, getDocByWeekOutReso, getDocByDayOutResoSpecial } from '../../../functions/summary';

import { getDocByMonthInEdu, getDocByDayInEdu, getDocByYearInEdu, getDocByWeekInEdu, getDocByDayInEduSpecial, 
    getDocByDayOutEdu, getDocByMonthOutEdu, getDocByYearOutEdu, getDocByWeekOutEdu, getDocByDayOutEduSpecial } from '../../../functions/summary';

import { getDocByMonthInPlace, getDocByDayInPlace, getDocByYearInPlace, getDocByWeekInPlace, getDocByDayInPlaceSpecial,
    getDocByDayOutPlace, getDocByMonthOutPlace, getDocByYearOutPlace, getDocByWeekOutPlace, getDocByDayOutPlaceSpecial } from '../../../functions/summary';

import { getDocByMonthInSubj, getDocByDayInSubj, getDocByYearInSubj, getDocByWeekInSubj, getDocByDayInSubjSpecial,
    getDocByDayOutSubj, getDocByMonthOutSubj, getDocByYearOutSubj, getDocByWeekOutSubj, getDocByDayOutSubjSpecial } from '../../../functions/summary';

import { getDocByMonthInAle, getDocByDayInAle, getDocByYearInAle, getDocByWeekInAle, getDocByDayInAleSpecial, 
    getDocByDayOutAle, getDocByMonthOutAle, getDocByYearOutAle, getDocByWeekOutAle, getDocByDayOutAleSpecial } from '../../../functions/summary';

import { getDocByMonthInRul, getDocByDayInRul, getDocByYearInRul, getDocByWeekInRul, getDocByDayInRulSpecial,
    getDocByDayOutRul, getDocByMonthOutRul, getDocByYearOutRul, getDocByWeekOutRul, getDocByDayOutRulSpecial } from '../../../functions/summary';

const Summary = () => {
    const [searchText, setSearchText] = useState('');
    const [searchNo, setSearchNo] = useState('');
    const [searchFrom, setSearchFrom] = useState('');
    const { RangePicker } = DatePicker;
    const [hackValue, setHackValue] = useState();
    const [dates, setDates] = useState([]);
    const [value, setValue] = useState();
    const [person, setPerson] = useState([]);
    const { user } = useSelector((state) => ({ ...state }))
    const { Column, ColumnGroup } = Table;
    const [game, setGame] = useState('card')
    

    //  InPerson
    const [ docbydayinperson, setDocbydayinperson ] = useState(0);
    const [ docbymonthinperson, setDocbymonthinperson ] = useState(0);
    const [ docbyyearinperson, setDocbyyearinperson ] = useState(0);
    const [ docbyweekinperson, setDocbyweekinperson ] = useState(0);
    const [ docbydayinpersonspecial, setDocbydayinpersonspecial ] = useState([]); 
    //  OutPerson
    const [ docbydayoutperson, setDocbydayoutperson ] = useState(0);
    const [ docbymonthoutperson, setDocbymonthoutperson ] = useState(0);
    const [ docbyyearoutperson, setDocbyyearoutperson ] = useState(0);
    const [ docbyweekoutperson, setDocbyweekoutperson ] = useState(0);
    const [ docbydayoutpersonspecial, setDocbydayoutpersonspecial ] = useState([]); 
    //  InMoney
    const [ docbydayinmoney, setDocbydayinmoney ] = useState(0);
    const [ docbymonthinmoney, setDocbymonthinmoney ] = useState(0);
    const [ docbyyearinmoney, setDocbyyearinmoney ] = useState(0);
    const [ docbyweekinmoney, setDocbyweekinmoney ] = useState(0);
    const [ docbydayinmoneyspecial, setDocbydayinmoneyspecial ] = useState([]); 
    //  OutMoney
    const [ docbydayoutmoney, setDocbydayoutmoney ] = useState(0);
    const [ docbymonthoutmoney, setDocbymonthoutmoney ] = useState(0);
    const [ docbyyearoutmoney, setDocbyyearoutmoney ] = useState(0);
    const [ docbyweekoutmoney, setDocbyweekoutmoney ] = useState(0);
    const [ docbydayoutmoneyspecial, setDocbydayoutmoneyspecial ] = useState([]); 
    //  InObj
    const [ docbydayinobj, setDocbydayinobj ] = useState(0);
    const [ docbymonthinobj, setDocbymonthinobj ] = useState(0);
    const [ docbyyearinobj, setDocbyyearinobj ] = useState(0);
    const [ docbyweekinobj, setDocbyweekinobj ] = useState(0);
    const [ docbydayinobjspecial, setDocbydayinobjspecial ] = useState([]); 
    //  OutObj
    const [ docbydayoutobj, setDocbydayoutobj ] = useState(0);
    const [ docbymonthoutobj, setDocbymonthoutobj ] = useState(0);
    const [ docbyyearoutobj, setDocbyyearoutobj] = useState(0);
    const [ docbyweekoutobj, setDocbyweekoutobj] = useState(0);
    const [ docbydayoutobjspecial, setDocbydayoutobjspecial ] = useState([]); 
    //  InRes
    const [ docbydayinres, setDocbydayinres ] = useState(0);
    const [ docbymonthinres, setDocbymonthinres ] = useState(0);
    const [ docbyyearinres, setDocbyyearinres ] = useState(0);
    const [ docbyweekinres, setDocbyweekinres ] = useState(0);
    const [ docbydayinresspecial, setDocbydayinresspecial ] = useState([]);
    //  OutRes
    const [ docbydayoutres, setDocbydayoutres ] = useState(0);
    const [ docbymonthoutres, setDocbymonthoutres ] = useState(0);
    const [ docbyyearoutres, setDocbyyearoutres] = useState(0);
    const [ docbyweekoutres, setDocbyweekoutres] = useState(0);
    const [ docbydayoutresspecial, setDocbydayoutresspecial ] = useState([]);
    //  InPlan
    const [ docbydayinplan, setDocbydayinplan ] = useState(0);
    const [ docbymonthinplan, setDocbymonthinplan ] = useState(0);
    const [ docbyyearinplan, setDocbyyearinplan ] = useState(0);
    const [ docbyweekinplan, setDocbyweekinplan ] = useState(0);
    const [ docbydayinplanspecial, setDocbydayinplanspecial ] = useState([]); 
    //  OutPlan
    const [ docbydayoutplan, setDocbydayoutplan ] = useState(0);
    const [ docbymonthoutplan, setDocbymonthoutplan ] = useState(0);
    const [ docbyyearoutplan, setDocbyyearoutplan] = useState(0);
    const [ docbyweekoutplan, setDocbyweekoutplan] = useState(0);
    const [ docbydayoutplanspecial, setDocbydayoutplanspecial ] = useState([]); 
    //  InReso
    const [ docbydayinreso, setDocbydayinreso ] = useState(0);
    const [ docbymonthinreso, setDocbymonthinreso ] = useState(0);
    const [ docbyyearinreso, setDocbyyearinreso ] = useState(0);
    const [ docbyweekinreso, setDocbyweekinreso ] = useState(0);
    const [ docbydayinresospecial, setDocbydayinresospecial ] = useState([]);
    //  OutReso
    const [ docbydayoutreso, setDocbydayoutreso ] = useState(0);
    const [ docbymonthoutreso, setDocbymonthoutreso ] = useState(0);
    const [ docbyyearoutreso, setDocbyyearoutreso ] = useState(0);
    const [ docbyweekoutreso, setDocbyweekoutreso ] = useState(0);
    const [ docbydayoutresospecial, setDocbydayoutresospecial ] = useState([]);
    //  InEdu
    const [ docbydayinedu, setDocbydayinedu ] = useState(0);
    const [ docbymonthinedu, setDocbymonthinedu ] = useState(0);
    const [ docbyyearinedu, setDocbyyearinedu ] = useState(0);
    const [ docbyweekinedu, setDocbyweekinedu ] = useState(0);
    const [ docbydayineduspecial, setDocbydayineduspecial ] = useState([]); 
    //  OutEdu
    const [ docbydayoutedu, setDocbydayoutedu ] = useState(0);
    const [ docbymonthoutedu, setDocbymonthoutedu ] = useState(0);
    const [ docbyyearoutedu, setDocbyyearoutedu ] = useState(0);
    const [ docbyweekoutedu, setDocbyweekoutedu ] = useState(0);
    const [ docbydayouteduspecial, setDocbydayouteduspecial ] = useState([]); 
    //  InPlace
    const [ docbydayinplace, setDocbydayinplace ] = useState(0);
    const [ docbymonthinplace, setDocbymonthinplace ] = useState(0);
    const [ docbyyearinplace, setDocbyyearinplace ] = useState(0);
    const [ docbyweekinplace, setDocbyweekinplace ] = useState(0);
    const [ docbydayinplacespecial, setDocbydayinplacespecial ] = useState([]); 
    //  OutPlace
    const [ docbydayoutplace, setDocbydayoutplace ] = useState(0);
    const [ docbymonthoutplace, setDocbymonthoutplace ] = useState(0);
    const [ docbyyearoutplace, setDocbyyearoutplace ] = useState(0);
    const [ docbyweekoutplace, setDocbyweekoutplace ] = useState(0);
    const [ docbydayoutplacespecial, setDocbydayoutplacespecial ] = useState([]); 
    //  InSubj
    const [ docbydayinsubj, setDocbydayinsubj ] = useState(0);
    const [ docbymonthinsubj, setDocbymonthinsubj ] = useState(0);
    const [ docbyyearinsubj, setDocbyyearinsubj] = useState(0);
    const [ docbyweekinsubj, setDocbyweekinsubj] = useState(0);
    const [ docbydayinsubjspecial, setDocbydayinsubjspecial ] = useState([]); 
    //  OutSubj
    const [ docbydayoutsubj, setDocbydayoutsubj ] = useState(0);
    const [ docbymonthoutsubj, setDocbymonthoutsubj ] = useState(0);
    const [ docbyyearoutsubj, setDocbyyearoutsubj ] = useState(0);
    const [ docbyweekoutsubj, setDocbyweekoutsubj ] = useState(0);
    const [ docbydayoutsubjspecial, setDocbydayoutsubjspecial ] = useState([]); 
    //  InAle
    const [ docbydayinale, setDocbydayinale ] = useState(0);
    const [ docbymonthinale, setDocbymonthinale ] = useState(0);
    const [ docbyyearinale, setDocbyyearinale] = useState(0);
    const [ docbyweekinale, setDocbyweekinale ] = useState(0);
    const [ docbydayinalespecial, setDocbydayinalespecial ] = useState([]); 
    
    //  OutAle
    const [ docbydayoutale, setDocbydayoutale ] = useState(0);
    const [ docbymonthoutale, setDocbymonthoutale ] = useState(0);
    const [ docbyyearoutale, setDocbyyearoutale ] = useState(0);
    const [ docbyweekoutale, setDocbyweekoutale ] = useState(0);
    const [ docbydayoutalespecial, setDocbydayoutalespecial ] = useState([]); 
    //  InRul
    const [ docbydayinrul, setDocbydayinrul ] = useState(0);
    const [ docbymonthinrul, setDocbymonthinrul ] = useState(0);
    const [ docbyyearinrul, setDocbyyearinrul ] = useState(0);
    const [ docbyweekinrul, setDocbyweekinrul ] = useState(0);
    const [ docbydayinrulspecial, setDocbydayinrulspecial ] = useState([]);
    //  OutRul
    const [ docbydayoutrul, setDocbydayoutrul ] = useState(0);
    const [ docbymonthoutrul, setDocbymonthoutrul ] = useState(0);
    const [ docbyyearoutrul, setDocbyyearoutrul ] = useState(0);
    const [ docbyweekoutrul, setDocbyweekoutrul ] = useState(0);
    const [ docbydayoutrulspecial, setDocbydayoutrulspecial ] = useState([]);

    // Special
    const [ newobject, setNewobject ] = useState([]); 
    const fakenewobject = [];
    const [someState, setSomeState] = useState('')
    const [ specialobject, setSpecialobject ] = useState(0);
    const [rerender, setRerender] = useState(false);
    
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
  
    

    useEffect(() => {
        loadPerson(user.token);
        getValueOfDocumentSummary();
      }, []);





      const loadPerson = (authtoken) => {
        getInSubj(authtoken)
            .then((res) => {
                
                setPerson(res.data)
                console.log(res.data)
                
            }).catch((err) => {
                toast.error(err)
                console.log(err)
            })
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

      const getValueOfDocumentSummary = () => {

          //  InPerson
          getDocByDayInPerson(user.token)
              .then((res) => {
                
                  setDocbydayinperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInPerson(user.token)
              .then((res) => {
                  
                  setDocbymonthinperson(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInPerson(user.token)
              .then((res) => {

                  setDocbyyearinperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInPerson(user.token)
              .then((res) => {

                  setDocbyweekinperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInPersonSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayinpersonspecial(res.data)
                  //console.log(docbydayinpersonspecial)

              }).catch((err) => {
                  console.log(err)
              })
    
          //  OutPerson
          getDocByDayOutPerson(user.token)
              .then((res) => {

                  setDocbydayoutperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutPerson(user.token)
              .then((res) => {

                  setDocbymonthoutperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
      
          getDocByYearOutPerson(user.token)
              .then((res) => {

                  setDocbyyearoutperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutPerson(user.token)
              .then((res) => {

                  setDocbyweekoutperson(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayOutPersonSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayoutpersonspecial(res.data)
                  //console.log(docbydayoutpersonspecial)

              }).catch((err) => {
                  console.log(err)
              })

          //  InMoney
          getDocByDayInMoney(user.token)
              .then((res) => {
                
                  setDocbydayinmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInMoney(user.token)
              .then((res) => {
                  
                  setDocbymonthinmoney(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInMoney(user.token)
              .then((res) => {

                  setDocbyyearinmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInMoney(user.token)
              .then((res) => {

                  setDocbyweekinmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInMoneySpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayinmoneyspecial(res.data)
                  //console.log(docbydayinmoneyspecial)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutMoney
          getDocByDayOutMoney(user.token)
          .then((res) => {

                  setDocbydayoutmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutMoney(user.token)
              .then((res) => {

                  setDocbymonthoutmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
      
          getDocByYearOutMoney(user.token)
              .then((res) => {

                  setDocbyyearoutmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutMoney(user.token)
              .then((res) => {

                  setDocbyweekoutmoney(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayOutMoneySpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayoutmoneyspecial(res.data)
                  //console.log(docbydayoutmoneyspecial)

              }).catch((err) => {
                  console.log(err)
              })


          //  InObj
          getDocByDayInObj(user.token)
              .then((res) => {
                
                  setDocbydayinobj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInObj(user.token)
              .then((res) => {
                  
                  setDocbymonthinobj(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInObj(user.token)
              .then((res) => {

                  setDocbyyearinobj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInObj(user.token)
              .then((res) => {
                  if (res.data == undefined) {
                    setDocbyweekinobj(0)
                  } else {
                    setDocbyweekinobj(res.data[0].count)
                  }
                  

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInObjSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayinobjspecial(res.data)
                  //console.log(docbydayinobjspecial)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutObj
          getDocByDayOutObj(user.token)
              .then((res) => {
                  if (res.data == undefined) {
                    setDocbydayoutobj(0)
                  } else {
                    setDocbydayoutobj(res.data[0].count)
                  }                

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutObj(user.token)
              .then((res) => {
                  
                  setDocbymonthoutobj(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutObj(user.token)
              .then((res) => {

                  setDocbyyearoutobj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutObj(user.token)
              .then((res) => {

                  setDocbyweekoutobj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayOutObjSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayoutobjspecial(res.data)
                  //console.log(docbydayoutobjspecial)

              }).catch((err) => {
                  console.log(err)
              })


          //  InRes
          getDocByDayInRes(user.token)
              .then((res) => {
                
                  setDocbydayinres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInRes(user.token)
              .then((res) => {
                  
                  setDocbymonthinres(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInRes(user.token)
              .then((res) => {

                  setDocbyyearinres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInRes(user.token)
              .then((res) => {

                  setDocbyweekinres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInResSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayinresspecial(res.data)
                  //console.log(docbydayinresspecial)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutRes
          getDocByDayOutRes(user.token)
              .then((res) => {
                
                  setDocbydayoutres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutRes(user.token)
              .then((res) => {
                  
                  setDocbymonthoutres(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutRes(user.token)
              .then((res) => {

                  setDocbyyearoutres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutRes(user.token)
              .then((res) => {

                  setDocbyweekoutres(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayOutResSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayoutresspecial(res.data)
                  //console.log(docbydayoutresspecial)

              }).catch((err) => {
                  console.log(err)
              })


          //  InPlan
          getDocByDayInPlan(user.token)
              .then((res) => {
                
                  setDocbydayinplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInPlan(user.token)
              .then((res) => {
                  
                  setDocbymonthinplan(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInPlan(user.token)
              .then((res) => {

                  setDocbyyearinplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInPlan(user.token)
              .then((res) => {

                  setDocbyweekinplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInPlanSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayinplanspecial(res.data)
                  //console.log(docbydayinplanspecial)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutPlan
          getDocByDayOutPlan(user.token)
              .then((res) => {
                
                  setDocbydayoutplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutPlan(user.token)
              .then((res) => {
                  
                  setDocbymonthoutplan(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutPlan(user.token)
              .then((res) => {

                  setDocbyyearoutplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutPlan(user.token)
              .then((res) => {

                  setDocbyweekoutplan(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayOutPlanSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayoutplanspecial(res.data)
                  //console.log(docbydayoutplanspecial)

              }).catch((err) => {
                  console.log(err)
              })

          //  InReso
          getDocByDayInReso(user.token)
              .then((res) => {
                
                  setDocbydayinreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInReso(user.token)
              .then((res) => {
                  
                  setDocbymonthinreso(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInReso(user.token)
              .then((res) => {

                  setDocbyyearinreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInReso(user.token)
              .then((res) => {

                  setDocbyweekinreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInResoSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayinresospecial(res.data)
                  //console.log(docbydayinresospecial)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutReso
          getDocByDayOutReso(user.token)
              .then((res) => {
                
                  setDocbydayoutreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutReso(user.token)
              .then((res) => {
                  
                  setDocbymonthoutreso(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutReso(user.token)
              .then((res) => {

                  setDocbyyearoutreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutReso(user.token)
              .then((res) => {

                  setDocbyweekoutreso(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayOutResoSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayoutresospecial(res.data)
                  //console.log(docbydayoutresospecial)

              }).catch((err) => {
                  console.log(err)
              })
          //  InEdu
          getDocByDayInEdu(user.token)
              .then((res) => {
                
                  setDocbydayinedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInEdu(user.token)
              .then((res) => {
                  
                  setDocbymonthinedu(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInEdu(user.token)
              .then((res) => {

                  setDocbyyearinedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInEdu(user.token)
              .then((res) => {

                  setDocbyweekinedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInEduSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayineduspecial(res.data)
                  //console.log(docbydayineduspecial)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutEdu
          getDocByDayOutEdu(user.token)
              .then((res) => {
                
                  setDocbydayoutedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutEdu(user.token)
              .then((res) => {
                  
                  setDocbymonthoutedu(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutEdu(user.token)
              .then((res) => {

                  setDocbyyearoutedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutEdu(user.token)
              .then((res) => {

                  setDocbyweekoutedu(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayOutEduSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayouteduspecial(res.data)
                  //console.log(docbydayouteduspecial)

              }).catch((err) => {
                  console.log(err)
              })



          //  InPlace
          getDocByDayInPlace(user.token)
              .then((res) => {
                
                  setDocbydayinplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInPlace(user.token)
              .then((res) => {
                  
                  setDocbymonthinplace(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInPlace(user.token)
              .then((res) => {

                  setDocbyyearinplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInPlace(user.token)
              .then((res) => {

                  setDocbyweekinplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInPlaceSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayinplacespecial(res.data)
                  //console.log(docbydayinplacespecial)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutPlace
          getDocByDayOutPlace(user.token)
              .then((res) => {
                
                  setDocbydayoutplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutPlace(user.token)
              .then((res) => {
                  
                  setDocbymonthoutplace(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutPlace(user.token)
              .then((res) => {

                  setDocbyyearoutplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekOutPlace(user.token)
              .then((res) => {

                  setDocbyweekoutplace(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })   
          getDocByDayOutPlaceSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayoutplacespecial(res.data)
                  //console.log(docbydayoutplacespecial)

              }).catch((err) => {
                  console.log(err)
              })            

          //  InSubj
          getDocByDayInSubj(user.token)
              .then((res) => {
                
                  setDocbydayinsubj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInSubj(user.token)
              .then((res) => {
                  
                  setDocbymonthinsubj(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInSubj(user.token)
              .then((res) => {

                  setDocbyyearinsubj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInSubjSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayinsubjspecial(res.data)
                  //console.log(docbydayinsubjspecial)

              }).catch((err) => {
                  console.log(err)
              }) 
          //  OutSubj
          getDocByDayOutSubj(user.token)
              .then((res) => {
                
                  setDocbydayoutsubj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutSubj(user.token)
              .then((res) => {
                  
                  setDocbymonthoutsubj(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutSubj(user.token)
              .then((res) => {

                  setDocbyyearoutsubj(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })   
          getDocByDayOutSubjSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayoutsubjspecial(res.data)
                  //console.log(docbydayoutsubjspecial)

              }).catch((err) => {
                  console.log(err)
              })    
              
          //  InAle
          getDocByDayInAle(user.token)
              .then((res) => {
                
                  setDocbydayinale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInAle(user.token)
              .then((res) => {
                  
                  setDocbymonthinale(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInAle(user.token)
              .then((res) => {

                  setDocbyyearinale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInAle(user.token)
              .then((res) => {
                  
                    setDocbyweekinale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInAleSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayinalespecial(res.data)
                  //console.log(docbydayinalespecial)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutAle
          getDocByDayOutAle(user.token)
              .then((res) => {
                
                  setDocbydayoutale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutAle(user.token)
              .then((res) => {
                  
                  setDocbymonthoutale(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutAle(user.token)
              .then((res) => {

                  setDocbyyearoutale(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
           getDocByWeekOutAle(user.token)
              .then((res) => {

                  setDocbyweekoutale(res.data[0].count)
                 

              }).catch((err) => {
                  console.log(err)
              })
            getDocByDayOutAleSpecial(user.token)
              .then((res) => {
                    
                    //console.log(res.data)
                    setDocbydayoutalespecial(res.data)
                    //console.log(docbydayoutalespecial)
                   
                   
              }).catch((err) => {
                  console.log(err)
              })
    


          //  InRul
          getDocByDayInRul(user.token)
              .then((res) => {
                
                  setDocbydayinrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthInRul(user.token)
              .then((res) => {
                  
                  setDocbymonthinrul(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearInRul(user.token)
              .then((res) => {

                  setDocbyyearinrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByWeekInRul(user.token)
              .then((res) => {

                  setDocbyweekinrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByDayInRulSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayinrulspecial(res.data)
                  //console.log(docbydayinrulspecial)

              }).catch((err) => {
                  console.log(err)
              })
          //  OutRul
          getDocByDayOutRul(user.token)
              .then((res) => {
                
                  setDocbydayoutrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })
          getDocByMonthOutRul(user.token)
              .then((res) => {
                  
                  setDocbymonthoutrul(res.data[0].count)
                
              }).catch((err) => {
                  console.log(err)
              })
          getDocByYearOutRul(user.token)
              .then((res) => {

                  setDocbyyearoutrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              })    
          getDocByWeekOutRul(user.token)
              .then((res) => {

                  setDocbyweekoutrul(res.data[0].count)

              }).catch((err) => {
                  console.log(err)
              }) 
          getDocByDayOutRulSpecial(user.token)
              .then((res) => {
                  //console.log(res.data)
                  
                  setDocbydayoutrulspecial(res.data)
                  //console.log(docbydayoutrulspecial)

              }).catch((err) => {
                  console.log(err)
              })  


              

          


              
    
      
      }

      const HandleDailyDocument2 = () => {
        setGame('card')
      }

      const HandleDailyDocument = () => {
        // console.log(docbydayinalespecial)
        // console.log(docbydayoutalespecial)
        // console.log(docbydayineduspecial)
        // console.log(docbydayouteduspecial)
        // console.log(docbydayinmoneyspecial)
        // console.log(docbydayoutmoneyspecial)
        // console.log(docbydayinobjspecial)
        // console.log(docbydayoutobjspecial)
        // console.log(docbydayinpersonspecial)
        // console.log(docbydayoutpersonspecial)
        // console.log(docbydayinplacespecial)
        // console.log(docbydayoutplacespecial)
        // console.log(docbydayinplanspecial)
        // console.log(docbydayoutplanspecial)
        // console.log(docbydayinresspecial)
        // console.log(docbydayoutresspecial)
        // console.log(docbydayinresospecial)
        // console.log(docbydayoutresospecial)
        // console.log(docbydayinrulspecial)
        // console.log(docbydayoutrulspecial)
        // console.log(docbydayinsubjspecial)
        // console.log(docbydayoutsubjspecial)
        setGame('playing')
        var fakenewobject = [];
        for (let i = 0; i < Object.keys(docbydayinalespecial).length; i++) {
            if (docbydayinalespecial[i] != undefined) {
                fakenewobject.push(docbydayinalespecial[i]);
            }
        } 
        for (let i = 0; i < Object.keys(docbydayoutalespecial).length; i++) {
            if(docbydayoutalespecial[i] != undefined) {
                fakenewobject.push(docbydayoutalespecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayineduspecial).length; i++){
            if(docbydayineduspecial[i] != undefined) {
                fakenewobject.push(docbydayineduspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayouteduspecial).length; i++){
            if(docbydayouteduspecial[i] != undefined) {
                fakenewobject.push(docbydayouteduspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayinmoneyspecial).length; i++){
            if(docbydayinmoneyspecial[i] != undefined) {
                fakenewobject.push(docbydayinmoneyspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayoutmoneyspecial).length; i++){
            if(docbydayoutmoneyspecial[i] != undefined) {
                fakenewobject.push(docbydayoutmoneyspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayinobjspecial).length; i++){
            if(docbydayinobjspecial[i] != undefined) {
                fakenewobject.push(docbydayinobjspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayoutobjspecial).length; i++){
            if(docbydayoutobjspecial[i] != undefined) {
                fakenewobject.push(docbydayoutobjspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayinpersonspecial).length; i++){
            if(docbydayinpersonspecial[i] != undefined) {
                fakenewobject.push(docbydayinpersonspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayoutpersonspecial).length; i++){
            if(docbydayoutpersonspecial[i] != undefined) {
                fakenewobject.push(docbydayoutpersonspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayinplacespecial).length; i++){
            if(docbydayinplacespecial[i] != undefined) {
                fakenewobject.push(docbydayinplacespecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayoutplacespecial).length; i++){
            if(docbydayoutplacespecial[i] != undefined) {
                fakenewobject.push(docbydayoutplacespecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayinplanspecial).length; i++){
            if(docbydayinplanspecial[i] != undefined) {
                fakenewobject.push(docbydayinplanspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayoutplanspecial).length; i++){
            if(docbydayoutplanspecial[i] != undefined) {
                fakenewobject.push(docbydayoutplanspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayinresspecial).length; i++){
            if(docbydayinresspecial[i] != undefined) {
                fakenewobject.push(docbydayinresspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayoutresspecial).length; i++){
            if(docbydayoutresspecial[i] != undefined) {
                fakenewobject.push(docbydayoutresspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayinresospecial).length; i++){
            if(docbydayinresospecial[i] != undefined) {
                fakenewobject.push(docbydayinresospecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayoutresospecial).length; i++){
            if(docbydayoutresospecial[i] != undefined) {
                fakenewobject.push(docbydayoutresospecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayinrulspecial).length; i++){
            if(docbydayinrulspecial[i] != undefined) {
                fakenewobject.push(docbydayinrulspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayoutrulspecial).length; i++){
            if(docbydayoutrulspecial[i] != undefined) {
                fakenewobject.push(docbydayoutrulspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayinsubjspecial).length; i++){
            if(docbydayinsubjspecial[i] != undefined) {
                fakenewobject.push(docbydayinsubjspecial[i]);
            }
        }
        for (let i = 0; i < Object.keys(docbydayoutsubjspecial).length; i++){
            if(docbydayoutsubjspecial[i] != undefined) {
                fakenewobject.push(docbydayoutsubjspecial[i]);
            }
        }


        setNewobject(fakenewobject)
        console.log(fakenewobject)
        console.log(newobject)
        console.log(dataSource)
  
        
      }


    






      const data = [
        {
          key: '1',
          name: 'ด้านบริหารและธุรการ(ทั่วไป)',
          countIn1: docbydayinperson+'  เรื่อง',
          countIn7: docbyweekinperson+'  เรื่อง',
          countIn30: docbymonthinperson+'  เรื่อง',
          countIn365: docbyyearinperson+'  เรื่อง',
          countOut1: docbydayoutperson+'  เรื่อง',
          countOut7: docbyweekoutperson+'  เรื่อง',
          countOut30: docbymonthoutperson+'  เรื่อง',
          countOut365: docbyyearoutperson+'  เรื่อง',
          
          
          
        },
        {
          key: '2',
          name: 'ด้านการเงิน',
          countIn1: docbydayinmoney+'  เรื่อง',
          countIn7: docbyweekinmoney+'  เรื่อง',
          countIn30: docbymonthinmoney+'  เรื่อง',
          countIn365: docbyyearinmoney+'  เรื่อง',
          countOut1: docbydayoutmoney+'  เรื่อง',
          countOut7: docbyweekoutmoney+'  เรื่อง',
          countOut30: docbymonthoutmoney+'  เรื่อง',
          countOut365: docbyyearoutmoney+'  เรื่อง',
          
          
        },
        {
          key: '3',
          name: 'ด้านพัสดุ',
          countIn1: docbydayinobj+'  เรื่อง',
          countIn7: docbyweekinobj+'  เรื่อง',
          countIn30: docbymonthinobj+'  เรื่อง',
          countIn365: docbyyearinobj+'  เรื่อง',
          countOut1: docbydayoutobj+'  เรื่อง',
          countOut7: docbyweekoutobj+'  เรื่อง',
          countOut30: docbymonthoutobj+'  เรื่อง',
          countOut365: docbyyearoutobj+'  เรื่อง',
          
          
        },
        {
            key: '4',
            name: 'ด้านวิจัย',
            countIn1: docbydayinres+'  เรื่อง',
            countIn7: docbyweekinres+'  เรื่อง',
            countIn30: docbymonthinres+'  เรื่อง',
            countIn365: docbyyearinres+'  เรื่อง',
            countOut1: docbydayoutres+'  เรื่อง',
            countOut7: docbyweekoutres+'  เรื่อง',
            countOut30: docbymonthoutres+'  เรื่อง',
            countOut365: docbyyearoutres+'  เรื่อง',
            
            
          },
        {
          key: '5',
          name: 'ด้านแผนยุทธศาสตร์',
          countIn1: docbydayinplan+'  เรื่อง',
          countIn7: docbyweekinplan+'  เรื่อง',
          countIn30: docbymonthinplan+'  เรื่อง',
          countIn365: docbyyearinplan+'  เรื่อง',
          countOut1: docbydayoutplan+'  เรื่อง',
          countOut7: docbyweekoutplan+'  เรื่อง',
          countOut30: docbymonthoutplan+'  เรื่อง',
          countOut365: docbyyearoutplan+'  เรื่อง',
          
          
        },
        {
            key: '6',
            name: 'ด้านทรัพยากรบุคคล',
            countIn1: docbydayinreso+'  เรื่อง',
            countIn7: docbyweekinreso+'  เรื่อง',
            countIn30: docbymonthinreso+'  เรื่อง',
            countIn365: docbyyearinreso+'  เรื่อง',
            countOut1: docbydayoutreso+'  เรื่อง',
            countOut7: docbyweekoutreso+'  เรื่อง',
            countOut30: docbymonthoutreso+'  เรื่อง',
            countOut365: docbyyearoutreso+'  เรื่อง',
            
            
        },
        {
            key: '7',
            name: 'ด้านการบริการการศึกษา',
            countIn1: docbydayinedu+'  เรื่อง',
            countIn7: docbyweekinedu+'  เรื่อง',
            countIn30: docbymonthinedu+'  เรื่อง',
            countIn365: docbyyearinedu+'  เรื่อง',
            countOut1: docbydayoutedu+'  เรื่อง',
            countOut7: docbyweekoutedu+'  เรื่อง',
            countOut30: docbymonthoutedu+'  เรื่อง',
            countOut365: docbyyearoutedu+'  เรื่อง',
            
            
        },
        {
            key: '8',
            name: 'ด้านอาคารสถานที่',
            countIn1: docbydayinplace+'  เรื่อง',
            countIn7: docbyweekinplace+'  เรื่อง',
            countIn30: docbymonthinplace+'  เรื่อง',
            countIn365: docbyyearinplace+'  เรื่อง',
            countOut1: docbydayoutplace+'  เรื่อง',
            countOut7: docbyweekoutplace+'  เรื่อง',
            countOut30: docbymonthoutplace+'  เรื่อง',
            countOut365: docbyyearoutplace+'  เรื่อง',
            
            
        },
        {
            key: '9',
            name: 'สาขาวิชาต่างๆ',
            countIn1: docbydayinsubj+'  เรื่อง',
            countIn7: docbyweekinsubj+'  เรื่อง',
            countIn30: docbymonthinsubj+'  เรื่อง',
            countIn365: docbyyearinsubj+'  เรื่อง',
            countOut1: docbydayoutsubj+'  เรื่อง',
            countOut7: docbyweekoutsubj+'  เรื่อง',
            countOut30: docbymonthoutsubj+'  เรื่อง',
            countOut365: docbyyearoutsubj+'  เรื่อง',
            
            
        },
        {
            key: '10',
            name: 'คำสั่งประกาศ',
            countIn1: docbydayinale+'  เรื่อง',
            countIn7: docbyweekinale+'  เรื่อง',
            countIn30: docbymonthinale+'  เรื่อง',
            countIn365: docbyyearinale+'  เรื่อง',
            countOut1: docbydayoutale+'  เรื่อง',
            countOut7: docbyweekoutale+'  เรื่อง',
            countOut30: docbymonthoutale+'  เรื่อง',
            countOut365: docbyyearoutale+'  เรื่อง',
       
        },
        {
            key: '11',
            name: 'ระเบียบข้อบังคับ',
            countIn1: docbydayinrul+'  เรื่อง',
            countIn7: docbyweekinrul+'  เรื่อง',
            countIn30: docbymonthinrul+'  เรื่อง',
            countIn365: docbyyearinrul+'  เรื่อง',
            countOut1: docbydayoutrul+'  เรื่อง',
            countOut7: docbyweekoutrul+'  เรื่อง',
            countOut30: docbymonthoutrul+'  เรื่อง',
            countOut365: docbyyearoutrul+'  เรื่อง',
            
            
        },
        {   key: '12',
            name: '',
        },{
            key: '13',
            name: 'รวม',
            countIn1: (docbydayinperson + docbydayinmoney + docbydayinobj + docbydayinres + docbydayinplan + docbydayinreso + docbydayinedu + docbydayinplace + docbydayinsubj + docbydayinale + docbydayinrul)+'  เรื่อง',
            countIn7: (docbyweekinperson + docbyweekinmoney + docbyweekinobj + docbyweekinres + docbyweekinplan + docbyweekinreso + docbyweekinedu + docbyweekinplace + docbyweekinsubj + docbyweekinale + docbyweekinrul)+'  เรื่อง',
            countIn30: (docbymonthinperson + docbymonthinmoney + docbymonthinobj + docbymonthinres + docbymonthinplan + docbymonthinreso + docbymonthinedu + docbymonthinplace + docbymonthinsubj + docbymonthinale + docbymonthinrul)+'  เรื่อง',
            countIn365: (docbyyearinperson + docbyyearinmoney + docbyyearinobj + docbyyearinres + docbyyearinplan + docbyyearinreso + docbyyearinedu + docbyyearinplace + docbyyearinsubj + docbyyearinale + docbyyearinrul)+'  เรื่อง',
            countOut1: (docbydayoutperson + docbydayoutmoney + docbydayoutobj + docbydayoutres + docbydayoutplan + docbydayoutreso + docbydayoutedu + docbydayoutplace + docbydayoutsubj + docbydayoutale + docbydayoutrul)+'  เรื่อง',
            countOut7: (docbyweekoutperson + docbyweekoutmoney + docbyweekoutobj + docbyweekoutres + docbyweekoutplan + docbyweekoutreso + docbyweekoutedu + docbyweekoutplace + docbyweekoutsubj + docbyweekoutale + docbyweekoutrul)+'  เรื่อง',
            countOut30: (docbymonthoutperson + docbymonthoutmoney + docbymonthoutobj + docbymonthoutres + docbymonthoutplan + docbymonthoutreso + docbymonthoutedu + docbymonthoutplace + docbymonthoutsubj + docbymonthoutale + docbymonthoutrul)+'  เรื่อง',
            countOut365: (docbyyearoutperson + docbyyearoutmoney + docbyyearoutobj + docbyyearoutres + docbyyearoutplan + docbyyearoutreso + docbyyearoutedu + docbyyearoutplace + docbyyearoutsubj + docbyyearoutale + docbyyearoutrul)+'  เรื่อง',
        },
    
    
      ];

      const sumdata = [
        {   key: '1',
            name: 'สรุป',
            countInOut1: (docbydayinperson + docbydayinmoney + docbydayinobj + docbydayinres + docbydayinplan + docbydayinreso + docbydayinedu + docbydayinplace + docbydayinsubj + docbydayinale + docbydayinrul + docbydayoutperson + docbydayoutmoney + docbydayoutobj + docbydayoutres + docbydayoutplan + docbydayoutreso + docbydayoutedu + docbydayoutplace + docbydayoutsubj + docbydayoutale + docbydayoutrul)+'  เรื่อง',
            countInOut7: (docbyweekinperson + docbyweekinmoney + docbyweekinobj + docbyweekinres + docbyweekinplan + docbyweekinreso + docbyweekinedu + docbyweekinplace + docbyweekinsubj + docbyweekinale + docbyweekinrul + docbyweekoutperson + docbyweekoutmoney + docbyweekoutobj + docbyweekoutres + docbyweekoutplan + docbyweekoutreso + docbyweekoutedu + docbyweekoutplace + docbyweekoutsubj + docbyweekoutale + docbyweekoutrul)+'  เรื่อง',
            countInOut30: (docbymonthinperson + docbymonthinmoney + docbymonthinobj + docbymonthinres + docbymonthinplan + docbymonthinreso + docbymonthinedu + docbymonthinplace + docbymonthinsubj + docbymonthinale + docbymonthinrul + docbymonthoutperson + docbymonthoutmoney + docbymonthoutobj + docbymonthoutres + docbymonthoutplan + docbymonthoutreso + docbymonthoutedu + docbymonthoutplace + docbymonthoutsubj + docbymonthoutale + docbymonthoutrul)+'  เรื่อง',
            countInOut365: (docbyyearinperson + docbyyearinmoney + docbyyearinobj + docbyyearinres + docbyyearinplan + docbyyearinreso + docbyyearinedu + docbyyearinplace + docbyyearinsubj + docbyyearinale + docbyyearinrul + docbyyearoutperson + docbyyearoutmoney + docbyyearoutobj + docbyyearoutres + docbyyearoutplan + docbyyearoutreso + docbyyearoutedu + docbyyearoutplace + docbyyearoutsubj + docbyyearoutale + docbyyearoutrul)+'  เรื่อง'
            
          },
        ];

        const summarytext = [
            {   key: '1',
                name: 'สรุปรายการเอกสารประจำวัน',
            }
        ]

        const objectvalues = [
            {   
                title: 'เรื่อง',
                dataIndex: 'name',
                key: 'name'

            },
            {
                title: 'ที่',
                dataIndex: 'locate',
                key: 'locate'
            },
            {
                title: 'วันที่',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'หมวดหมู่',
                dataIndex: 'category',
                key: 'category'
            }
        ]
 

      

  return <div>
    

  


  

  {(() => {
  switch (game) {
          case 'card':
            return <div><div className="button"><Button onClick={HandleDailyDocument}>แสดงรายละเอียดประจำวัน</Button> </div><Table dataSource={data} size="small" pagination={false} bordered>
            
        
            <Column title="หมวดหมู่" dataIndex="name" key="name" />
        
        
            <ColumnGroup title="วันนี้">
              <Column title="รับเข้า" dataIndex="countIn1" key="countIn1" />
              <Column title="ส่งออก" dataIndex="countOut1" key="countOut1" />
            </ColumnGroup>
        
        
            <ColumnGroup title="สัปดาห์นี้" >
              <Column title="รับเข้า" dataIndex="countIn7" key="countIn7" />
              <Column title="ส่งออก" dataIndex="countOut7" key="countOut7" />
              
            </ColumnGroup>
            <ColumnGroup title="เดือนนี้">
              <Column title="รับเข้า" dataIndex="countIn30" key="countIn30"/>
              <Column title="ส่งออก" dataIndex="countOut30" key="countOut30" />
            </ColumnGroup>
        
            <ColumnGroup title="ปีนี้">
              <Column title="รับเข้า" dataIndex="countIn365" key="countIn365" />
              <Column title="ส่งออก" dataIndex="countOut365" key="countOut365" />
            </ColumnGroup>
           
          
          </Table>
        
        
          <Table dataSource={sumdata} size="small" pagination={false} bordered>
          <Column  dataIndex="name" key="name" width={360}/>
          <Column  dataIndex="countInOut1" align='center'/>
          <Column  dataIndex="countInOut7" align='center'/>
          <Column  dataIndex="countInOut30" align='center'/>
          <Column  dataIndex="countInOut365" align='center'/>
        
          </Table></div>
          case 'playing':
            return <div><div className="button"><Button onClick={HandleDailyDocument2}>แสดงรายละเอียดทั้งหมด</Button></div> <Table dataSource={summarytext} size="small" pagination={false} bordered>
            <Column dataIndex="name" key="name" align='center'></Column>
        </Table><Table dataSource={newobject} columns={objectvalues} size="small" pagination={false} bordered></Table></div>
            default:
            return null
        }

      })()}
  

  
    
    


    
   
  
  

        
      
  
      </div>;
      
      
     
      
};

export default Summary