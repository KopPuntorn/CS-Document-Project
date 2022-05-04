import axios from 'axios';


//  InPerson
export const getDocByDayInPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/inperson'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/inperson'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/inperson'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/inperson'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInPersonSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/inperson'
     , {
        headers: {
            authtoken
        }
     });

//  OutPerson  
export const getDocByDayOutPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outperson'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outperson'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outperson'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutPerson = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outperson'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutPersonSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outperson'
     , {
        headers: {
            authtoken
        }
     });


//--------------------------------------------------------------------

//  InMoney
export const getDocByDayInMoney = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/inmoney'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInMoney = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/inmoney'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInMoney = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/inmoney'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInMoney = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/inmoney'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInMoneySpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/inmoney'
     , {
        headers: {
            authtoken
        }
     });

//  OutMoney 
export const getDocByDayOutMoney  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outmoney'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutMoney  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outmoney'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutMoney  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outmoney'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutMoney  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outmoney'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutMoneySpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outmoney'
     , {
        headers: {
            authtoken
        }
     });

///---------------------------------------------------------------------

//  InObj
export const getDocByDayInObj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/inobj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInObj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/inobj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInObj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/inobj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInObj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/inobj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInObjSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/inobj'
     , {
        headers: {
            authtoken
        }
     });
//  OutObj
export const getDocByDayOutObj  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outobj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutObj  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outobj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutObj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outobj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutObj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outobj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutObjSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outobj'
     , {
        headers: {
            authtoken
        }
     });

///---------------------------------------------------------------------


//  InRes
export const getDocByDayInRes = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/inres'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInRes = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/inres'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInRes = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/inres'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInRes = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/inres'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInResSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/inres'
     , {
        headers: {
            authtoken
        }
     });
//  OutRes
export const getDocByDayOutRes  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outres'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutRes  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outres'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutRes = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outres'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutRes = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outres'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutResSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outres'
     , {
        headers: {
            authtoken
        }
     });


///---------------------------------------------------------------------


//  InPlan
export const getDocByDayInPlan = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/inplan'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInPlan = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/inplan'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInPlan = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/inplan'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInPlan = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/inplan'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInPlanSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/inplan'
     , {
        headers: {
            authtoken
        }
     });
//  OutPlan
export const getDocByDayOutPlan = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outplan'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutPlan  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outplan'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutPlan = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outplan'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutPlan = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outplan'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutPlanSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outplan'
     , {
        headers: {
            authtoken
        }
     });


///---------------------------------------------------------------------


//  InReso
export const getDocByDayInReso = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/inreso'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInReso = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/inreso'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInReso = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/inreso'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInReso = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/inreso'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInResoSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/inreso'
     , {
        headers: {
            authtoken
        }
     });
//  OutReso
export const getDocByDayOutReso  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outreso'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutReso  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outreso'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutReso = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outreso'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutReso = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outreso'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutResoSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outreso'
     , {
        headers: {
            authtoken
        }
     });


///---------------------------------------------------------------------


//  InEdu
export const getDocByDayInEdu = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/inedu'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInEdu = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/inedu'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInEdu = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/inedu'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInEdu = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/inedu'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInEduSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/inedu'
     , {
        headers: {
            authtoken
        }
     });
//  OutEdu
export const getDocByDayOutEdu  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outedu'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutEdu  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outedu'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutEdu = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outedu'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutEdu = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outedu'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutEduSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outedu'
     , {
        headers: {
            authtoken
        }
     });

///---------------------------------------------------------------------     

//  InPlace
export const getDocByDayInPlace = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/inplace'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInPlace = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/inplace'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInPlace = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/inplace'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInPlace = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/inplace'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInPlaceSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/inplace'
     , {
        headers: {
            authtoken
        }
     });
//  OutPlace
export const getDocByDayOutPlace  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outplace'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutPlace  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outplace'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutPlace = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outplace'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutPlace = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outplace'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutPlaceSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outplace'
     , {
        headers: {
            authtoken
        }
     });



///---------------------------------------------------------------------     

//  InSubj
export const getDocByDayInSubj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/insubj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInSubj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/insubj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInSubj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/insubj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInSubj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/insubj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInSubjSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/insubj'
     , {
        headers: {
            authtoken
        }
     });
//  OutSubj
export const getDocByDayOutSubj  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outsubj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutSubj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outsubj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutSubj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outsubj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutSubj = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outsubj'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutSubjSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outsubj'
     , {
        headers: {
            authtoken
        }
     });


///---------------------------------------------------------------------     

//  InAle
export const getDocByDayInAle = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/inale'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInAle = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/inale'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInAle = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/inale'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInAle = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/inale'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInAleSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/inale'
     , {
        headers: {
            authtoken
        }
     });

//  OutAle
export const getDocByDayOutAle  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outale'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutAle = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outale'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutAle = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outale'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutAle = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outale'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutAleSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outale'
     , {
        headers: {
            authtoken
        }
     });


///---------------------------------------------------------------------     

//  InRul
export const getDocByDayInRul = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/inrul'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthInRul = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/inrul'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearInRul = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/inrul'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekInRul = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/inrul'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayInRulSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/inrul'
     , {
        headers: {
            authtoken
        }
     });
//  OutRul
export const getDocByDayOutRul  = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyday/outrul'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByMonthOutRul = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbymonth/outrul'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByYearOutRul = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyyear/outrul'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByWeekOutRul = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbyweek/outrul'
     , {
        headers: {
            authtoken
        }
     });
export const getDocByDayOutRulSpecial = async (authtoken) => 
     await axios.get(process.env.REACT_APP_API+'/summary/docbydayspecial/outrul'
     , {
        headers: {
            authtoken
        }
     });

