import React, { useEffect, useState } from 'react';
import './CardPost.css';
import { useSelector } from 'react-redux';
import { getInRul } from '../../../../functions/inrul';
import { toast } from 'react-toastify';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import DownloadLink from "react-download-link";
import axios from 'axios';
import download from 'downloadjs';

function CardPost(props) {
    const { CardData, onBgClick }= props;
    const [person, setPerson] = useState([]);
    const { user } = useSelector((state) => ({ ...state }))
    const [errorMsg, setErrorMsg] = useState('');

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
        getInRul(authtoken)
          .then((res) => {
              setPerson(res.data)
              console.log(res.data)
          }).catch((err) => {
              toast.error(err)
              console.log(err)
          })
  }
  
    return (
        <div className="card-post">
            <div className="card-post-bg" onClick={onBgClick}/>
            <div className="card-post-content">
                <img  src={require('./Card11.png').default} alt="card" />
                <div className="card-post-detail">
                <div className="card-post-detail1">{CardData.name}</div>
                <div className="card-post-detail2">หมวดหมู่: ระเบียบข้อบังคับ</div>
                <div className="card-post-detail3">เลขที่หนังสือ : {CardData.locate}</div>
                <div className="card-post-detail4">
               <a href={`https://backyard-ewdetiojvq-as.a.run.app/uploads/${CardData.pic}`} target="_blank" > 
                   <div className="infobutton">
                   ดูรายละเอียด</div>
                </a>
                <a
              onClick={() =>
                downloadFile(CardData.pic, CardData.file_path, CardData.file_mimetype)
              }
            > Download
            </a>
                
                </div>
                
                
                </div>
            </div>
        </div>
    )
}

export default CardPost