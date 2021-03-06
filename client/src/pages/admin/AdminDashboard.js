import React, { useState, useEffect } from 'react';
import DownloadLink from "react-download-link";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table, Avatar, Image } from 'antd';
import "./upload.css";
import { createPerson, getPerson, removePerson } from '../../functions/person';
import { ocrBeforeUpload } from '../../functions/ocr';
import { DeleteOutlined, VerifiedOutlined } from '@ant-design/icons';
import { AiOutlineVerticalAlignBottom} from "react-icons/ai";
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';




const AdminDashboard = () => {
    const { user } = useSelector((state) => ({ ...state }))
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [person, setPerson] = useState([]);
    const [ file, setFile] = useState();
    const [ filename, setFilename] = useState('')
    const [ dateFirst, setDateFirst] = useState('');
    const [ numTo, setNumTo] = useState('');
    const [ locate, setLocate ] = useState('');
    const [ dateGen, setDateGen] = useState('');
    const [ from, setFrom] = useState('');
    const [ to, setTo] = useState('');
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);


    useEffect(() => {
        loadPerson(user.token);
       
    }, [])

   

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        
        formData.append('file', file);
        formData.append('data', name)
        formData.append('data', dateFirst)
        formData.append('data', numTo)
        formData.append('data', locate)
        formData.append('data', dateGen)
        formData.append('data', from)
        formData.append('data', to);

      
        createPerson(formData, user.token)
            .then(res=>{
                loadPerson(user.token);
                toast.success('อัพโหลดไฟล์ '+ res.data.name + ' สำเร็จ ')
            }).catch(err=>{
                toast.error(err.response)
            })
    }


    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        setPageNumber(1);
      }

    return (
        
        <div className="container-fluid">
            
            <div >
                <div className="headfrom">
                เพิ่มข้อมูลรับเข้าเอกสาร
                </div>
                <div className="previewPDF">
                    <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page height="800" pageNumber={pageNumber} />
                        </Document>
                </div>
                <div className="realfrom">
                    
                    <form onSubmit={onSubmit} className="allform">
                        
                    <div className="file-input">
                    <label>เพิ่มไฟล์เอกสาร </label><br></br>
                            <input
                                type="file"
                                className="file" 
                                onChange={ (e) => setFile(e.target.files[0]) }                                                                
                            />
                         
                            <label className="file-name"
                                htmlFor="customfile"
                            >
                                {filename} 
                            </label>
                        </div>

                

                        <div className="dateinput">
                            <label>วันที่</label>
                            <input type="date"
                                className="date-input"
                                autoFocus
                                required
                                onChange={(e) => setDateFirst(e.target.value)}
                                defaultValue={dateFirst}
                            />
                        </div>

                        <div className="noinput">
                            <label>เลขรับ</label>
                            <input type="number"
                                className="no"
                                autoFocus
                                required
                                onChange={(e) => setNumTo(e.target.value)}
                                defaultValue={numTo}
                            />
                        </div>

                        <div className="nofrominput">
                            <label>ที่</label>
                            <input type="text"
                                className="nofrom"
                                autoFocus
                                required
                                onChange={(e) => setLocate(e.target.value)}
                                defaultValue={locate}
                            />
                        </div>


                        <div className="inputdate">
                            <label>ลงวันที่</label>
                            <input type="date"
                                className="datedate"
                                autoFocus
                                required
                                onChange={(e) => setDateGen(e.target.value)}
                                defaultValue={dateGen}
                            />
                        </div>
                    
                        <div className="frominput">
                            <label>จาก</label>
                            <input type="text"
                                className="formbox"
                                autoFocus
                                required
                                onChange={(e) => setFrom(e.target.value)}
                                defaultValue={from}
                            />
                        </div>

                        <div className="tooinput">
                            <label>ถึง</label>
                            <input type="text"
                                className="toobox"
                                autoFocus
                                required
                                onChange={(e) => setTo(e.target.value)}
                                defaultValue={to}
                            />
                        </div>
                        <div className="nameinput">
                            <label>เรื่อง</label>
                            <input type="text"
                                className="namebox"
                                autoFocus
                                required
                                onChange={(e) => setName(e.target.value)}
                                defaultValue={name}
                            />
                        </div>

                        <button className="btnfrom">เพิ่ม</button>
                    </form>

                </div>
                
            </div>
            
        </div>
        
    )
}

export default AdminDashboard
