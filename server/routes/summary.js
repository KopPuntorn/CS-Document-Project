const express = require('express');
const router = express.Router();
const { authCheck } = require('../middleware/auth')

const { getDocByMonthInPerson, getDocByDayInPerson, getDocByYearInPerson, getDocByWeekInPerson, getDocByDayInPersonSpecial } = require('../controllers/summaryinperson');
const { getDocByMonthOutPerson, getDocByDayOutPerson, getDocByYearOutPerson, getDocByWeekOutPerson, getDocByDayOutPersonSpecial  } = require('../controllers/summaryoutperson');

const { getDocByMonthInMoney, getDocByDayInMoney, getDocByYearInMoney, getDocByWeekInMoney, getDocByDayInMoneySpecial } = require('../controllers/summaryinmoney');
const { getDocByMonthOutMoney, getDocByDayOutMoney, getDocByYearOutMoney, getDocByWeekOutMoney, getDocByDayOutMoneySpecial } = require('../controllers/summaryoutmoney');

const { getDocByMonthInObj, getDocByDayInObj, getDocByYearInObj, getDocByWeekInObj, getDocByDayInObjSpecial } = require('../controllers/summaryinobj');
const { getDocByMonthOutObj, getDocByDayOutObj, getDocByYearOutObj, getDocByWeekOutObj, getDocByDayOutObjSpecial } = require('../controllers/summaryoutobj');

const { getDocByMonthInRes, getDocByDayInRes, getDocByYearInRes, getDocByWeekInRes, getDocByDayInResSpecial } = require('../controllers/summaryinres');
const { getDocByMonthOutRes, getDocByDayOutRes, getDocByYearOutRes,getDocByWeekOutRes, getDocByDayOutResSpecial } = require('../controllers/summaryoutres');

const { getDocByMonthInPlan, getDocByDayInPlan, getDocByYearInPlan, getDocByWeekInPlan, getDocByDayInPlanSpecial } = require('../controllers/summaryinplan');
const { getDocByMonthOutPlan, getDocByDayOutPlan, getDocByYearOutPlan, getDocByWeekOutPlan, getDocByDayOutPlanSpecial } = require('../controllers/summaryoutplan');

const { getDocByMonthInReso, getDocByDayInReso, getDocByYearInReso, getDocByWeekInReso, getDocByDayInResoSpecial } = require('../controllers/summaryinreso');
const { getDocByMonthOutReso, getDocByDayOutReso, getDocByYearOutReso, getDocByWeekOutReso, getDocByDayOutResoSpecial } = require('../controllers/summaryoutreso');

const { getDocByMonthInEdu, getDocByDayInEdu, getDocByYearInEdu, getDocByWeekInEdu, getDocByDayInEduSpecial } = require('../controllers/summaryinedu');
const { getDocByMonthOutEdu, getDocByDayOutEdu, getDocByYearOutEdu, getDocByWeekOutEdu, getDocByDayOutEduSpecial } = require('../controllers/summaryoutedu');

const { getDocByMonthInPlace, getDocByDayInPlace, getDocByYearInPlace, getDocByWeekInPlace, getDocByDayInPlaceSpecial } = require('../controllers/summaryinplace');
const { getDocByMonthOutPlace, getDocByDayOutPlace, getDocByYearOutPlace, getDocByWeekOutPlace, getDocByDayOutPlaceSpecial } = require('../controllers/summaryoutplace');

const { getDocByMonthInSubj, getDocByDayInSubj, getDocByYearInSubj, getDocByWeekInSubj, getDocByDayInSubjSpecial } = require('../controllers/summaryinsubj');
const { getDocByMonthOutSubj, getDocByDayOutSubj, getDocByYearOutSubj, getDocByWeekOutSubj, getDocByDayOutSubjSpecial } = require('../controllers/summaryoutsubj');

const { getDocByMonthInAle, getDocByDayInAle, getDocByYearInAle , getDocByWeekInAle, getDocByDayInAleSpecial} = require('../controllers/summaryinale');
const { getDocByMonthOutAle, getDocByDayOutAle, getDocByYearOutAle, getDocByWeekOutAle, getDocByDayOutAleSpecial } = require('../controllers/summaryoutale');

const { getDocByMonthInRul, getDocByDayInRul, getDocByYearInRul, getDocByWeekInRul, getDocByDayInRulSpecial } = require('../controllers/summaryinrul');
const { getDocByMonthOutRul, getDocByDayOutRul, getDocByYearOutRul, getDocByWeekOutRul, getDocByDayOutRulSpecial } = require('../controllers/summaryoutrul');




//@route    InPerson
router.get('/summary/docbyday/inperson', authCheck, getDocByDayInPerson);
router.get('/summary/docbymonth/inperson', authCheck, getDocByMonthInPerson);
router.get('/summary/docbyyear/inperson', authCheck, getDocByYearInPerson);
router.get('/summary/docbyweek/inperson', authCheck, getDocByWeekInPerson);
router.get('/summary/docbydayspecial/inperson', authCheck, getDocByDayInPersonSpecial)
//@route    OutPerson
router.get('/summary/docbyday/outperson', authCheck, getDocByDayOutPerson);
router.get('/summary/docbymonth/outperson', authCheck, getDocByMonthOutPerson);
router.get('/summary/docbyyear/outperson', authCheck, getDocByYearOutPerson);
router.get('/summary/docbyweek/outperson', authCheck, getDocByWeekOutPerson);
router.get('/summary/docbydayspecial/outperson', authCheck, getDocByDayOutPersonSpecial)



//@route    InMoney
router.get('/summary/docbyday/inmoney', authCheck, getDocByDayInMoney);
router.get('/summary/docbymonth/inmoney', authCheck, getDocByMonthInMoney);
router.get('/summary/docbyyear/inmoney', authCheck, getDocByYearInMoney);
router.get('/summary/docbyweek/inmoney', authCheck, getDocByWeekInMoney);
router.get('/summary/docbydayspecial/inmoney', authCheck, getDocByDayInMoneySpecial)
//@route    OutMoney
router.get('/summary/docbyday/outmoney', authCheck, getDocByDayOutMoney);
router.get('/summary/docbymonth/outmoney', authCheck, getDocByMonthOutMoney);
router.get('/summary/docbyyear/outmoney', authCheck, getDocByYearOutMoney);
router.get('/summary/docbyweek/outmoney', authCheck, getDocByWeekOutMoney);
router.get('/summary/docbydayspecial/outmoney', authCheck, getDocByDayOutMoneySpecial)



//@route    InObj
router.get('/summary/docbyday/inobj', authCheck, getDocByDayInObj);
router.get('/summary/docbymonth/inobj', authCheck, getDocByMonthInObj);
router.get('/summary/docbyyear/inobj', authCheck, getDocByYearInObj);
router.get('/summary/docbyweek/inobj', authCheck, getDocByWeekInObj);
router.get('/summary/docbydayspecial/inobj', authCheck, getDocByDayInObjSpecial)
//@route    OutObj
router.get('/summary/docbyday/outobj', authCheck, getDocByDayOutObj);
router.get('/summary/docbymonth/outobj', authCheck, getDocByMonthOutObj);
router.get('/summary/docbyyear/outobj', authCheck, getDocByYearOutObj);
router.get('/summary/docbyweek/outobj', authCheck, getDocByWeekOutObj);
router.get('/summary/docbydayspecial/outobj', authCheck, getDocByDayOutObjSpecial)



//@route    InRes
router.get('/summary/docbyday/inres', authCheck, getDocByDayInRes);
router.get('/summary/docbymonth/inres', authCheck, getDocByMonthInRes);
router.get('/summary/docbyyear/inres', authCheck, getDocByYearInRes);
router.get('/summary/docbyweek/inres', authCheck, getDocByWeekInRes);
router.get('/summary/docbydayspecial/inres', authCheck, getDocByDayInResSpecial);
//@route    OutRes
router.get('/summary/docbyday/outres', authCheck, getDocByDayOutRes);
router.get('/summary/docbymonth/outres', authCheck, getDocByMonthOutRes);
router.get('/summary/docbyyear/outres', authCheck, getDocByYearOutRes);
router.get('/summary/docbyweek/outres', authCheck, getDocByWeekOutRes);
router.get('/summary/docbydayspecial/outres', authCheck, getDocByDayOutResSpecial);


//@route    InPlan
router.get('/summary/docbyday/inplan', authCheck, getDocByDayInPlan);
router.get('/summary/docbymonth/inplan', authCheck, getDocByMonthInPlan);
router.get('/summary/docbyyear/inplan', authCheck, getDocByYearInPlan);
router.get('/summary/docbyweek/inplan', authCheck, getDocByWeekInPlan);
router.get('/summary/docbydayspecial/inplan', authCheck, getDocByDayInPlanSpecial);

//@route    OutPlan
router.get('/summary/docbyday/outplan', authCheck, getDocByDayOutPlan);
router.get('/summary/docbymonth/outplan', authCheck, getDocByMonthOutPlan);
router.get('/summary/docbyyear/outplan', authCheck, getDocByYearOutPlan);
router.get('/summary/docbyweek/outplan', authCheck, getDocByWeekOutPlan);
router.get('/summary/docbydayspecial/outplan', authCheck, getDocByDayOutPlanSpecial)


//@route    InReso
router.get('/summary/docbyday/inreso', authCheck, getDocByDayInReso);
router.get('/summary/docbymonth/inreso', authCheck, getDocByMonthInReso);
router.get('/summary/docbyyear/inreso', authCheck, getDocByYearInReso);
router.get('/summary/docbyweek/inreso', authCheck, getDocByWeekInReso);
router.get('/summary/docbydayspecial/inreso', authCheck, getDocByDayInResoSpecial);
//@route    OutReso
router.get('/summary/docbyday/outreso', authCheck, getDocByDayOutReso);
router.get('/summary/docbymonth/outreso', authCheck, getDocByMonthOutReso);
router.get('/summary/docbyyear/outreso', authCheck, getDocByYearOutReso);
router.get('/summary/docbyweek/outreso', authCheck, getDocByWeekOutReso);
router.get('/summary/docbydayspecial/outreso', authCheck, getDocByDayOutResoSpecial);

//@route    InEdu
router.get('/summary/docbyday/inedu', authCheck, getDocByDayInEdu);
router.get('/summary/docbymonth/inedu', authCheck, getDocByMonthInEdu);
router.get('/summary/docbyyear/inedu', authCheck, getDocByYearInEdu);
router.get('/summary/docbyweek/inedu', authCheck, getDocByWeekInEdu);
router.get('/summary/docbydayspecial/inedu', authCheck, getDocByDayInEduSpecial)
//@route    OutEdu
router.get('/summary/docbyday/outedu', authCheck, getDocByDayOutEdu);
router.get('/summary/docbymonth/outedu', authCheck, getDocByMonthOutEdu);
router.get('/summary/docbyyear/outedu', authCheck, getDocByYearOutEdu);
router.get('/summary/docbyweek/outedu', authCheck, getDocByWeekOutEdu);
router.get('/summary/docbydayspecial/outedu', authCheck, getDocByDayOutEduSpecial)


//@route    InPlace
router.get('/summary/docbyday/inplace', authCheck, getDocByDayInPlace);
router.get('/summary/docbymonth/inplace', authCheck, getDocByMonthInPlace);
router.get('/summary/docbyyear/inplace', authCheck, getDocByYearInPlace);
router.get('/summary/docbyweek/inplace', authCheck, getDocByWeekInPlace);
router.get('/summary/docbydayspecial/inplace', authCheck, getDocByDayInPlaceSpecial)
//@route    OutPlace
router.get('/summary/docbyday/outplace', authCheck, getDocByDayOutPlace);
router.get('/summary/docbymonth/outplace', authCheck, getDocByMonthOutPlace);
router.get('/summary/docbyyear/outplace', authCheck, getDocByYearOutPlace);
router.get('/summary/docbyweek/outplace', authCheck, getDocByWeekOutPlace);
router.get('/summary/docbydayspecial/outplace', authCheck, getDocByDayOutPlaceSpecial)

//@route    InSubj
router.get('/summary/docbyday/insubj', authCheck, getDocByDayInSubj);
router.get('/summary/docbymonth/insubj', authCheck, getDocByMonthInSubj);
router.get('/summary/docbyyear/insubj', authCheck, getDocByYearInSubj);
router.get('/summary/docbyweek/insubj', authCheck, getDocByWeekInSubj);
router.get('/summary/docbydayspecial/insubj', authCheck, getDocByDayInSubjSpecial)
//@route    OutSubj
router.get('/summary/docbyday/outsubj', authCheck, getDocByDayOutSubj);
router.get('/summary/docbymonth/outsubj', authCheck, getDocByMonthOutSubj);
router.get('/summary/docbyyear/outsubj', authCheck, getDocByYearOutSubj);
router.get('/summary/docbyweek/outsubj', authCheck, getDocByWeekOutSubj);
router.get('/summary/docbydayspecial/outsubj', authCheck, getDocByDayOutSubjSpecial)

//@route    InAle
router.get('/summary/docbyday/inale', authCheck, getDocByDayInAle);
router.get('/summary/docbymonth/inale', authCheck, getDocByMonthInAle);
router.get('/summary/docbyyear/inale', authCheck, getDocByYearInAle);
router.get('/summary/docbyweek/inale', authCheck, getDocByWeekInAle);
router.get('/summary/docbydayspecial/inale', authCheck, getDocByDayInAleSpecial)
//@route    OutAle
router.get('/summary/docbyday/outale', authCheck, getDocByDayOutAle);
router.get('/summary/docbymonth/outale', authCheck, getDocByMonthOutAle);
router.get('/summary/docbyyear/outale', authCheck, getDocByYearOutAle);
router.get('/summary/docbyweek/outale', authCheck, getDocByWeekOutAle);
router.get('/summary/docbydayspecial/outale', authCheck, getDocByDayOutAleSpecial)

//@route    InRul
router.get('/summary/docbyday/inrul', authCheck, getDocByDayInRul);
router.get('/summary/docbymonth/inrul', authCheck, getDocByMonthInRul);
router.get('/summary/docbyyear/inrul', authCheck, getDocByYearInRul);
router.get('/summary/docbyweek/inrul', authCheck, getDocByWeekInRul);
router.get('/summary/docbydayspecial/inrul', authCheck, getDocByDayInRulSpecial)
//@route    OutRul
router.get('/summary/docbyday/outrul', authCheck, getDocByDayOutRul);
router.get('/summary/docbymonth/outrul', authCheck, getDocByMonthOutRul);
router.get('/summary/docbyyear/outrul', authCheck, getDocByYearOutRul);
router.get('/summary/docbyweek/outrul', authCheck, getDocByWeekOutRul);
router.get('/summary/docbydayspecial/outrul', authCheck, getDocByDayOutRulSpecial)











module.exports = router;