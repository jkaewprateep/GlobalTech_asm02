import React, { useEffect, useState } from 'react';
//
import { useParams, useNavigate } from 'react-router-dom';
import {urlConfig} from '../../config';
import './page_01.css';

//
import Popup from 'reactjs-popup';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

// icon image
import img_downarrow from '../../images/down.png';
import img_uparrow from '../../images/up.png';
// import { isVisible } from '@testing-library/user-event/dist/utils';

//
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

//
import Header from "../header/header";
import { useTimer } from 'react-timer-hook';




function App({ expiryTimestamp }) {
// class App extends React.Component {

    function filterByordernumber( order ){
        return order=1;
    }

    //
    const updateRecord = async ( update_record, nativeEvent ) => {

        // records.      
        const fieldData = nativeEvent.target.dataset.user;
        const recordorder = nativeEvent.target.dataset.recordorder;
        // const TextValue = document.getElementById(labelData).varName;
        // console.log("labelData: labelData: ", update_record);


        // setFormInput(update_record);


        const fields = ["_id", "order", "stockname", "amountof_records_01", "YP80_01", "pYP80_01", "YP50_01", "pYP50_01", "YP20_01", "pYP20_01",
            "amountof_records_02", "YP80_02", "pYP80_02", "YP50_02", "pYP50_02", "YP20_02", "pYP20_02",
            "amountof_records_03", "YP80_03", "pYP80_03", "YP50_03", "pYP50_03", "YP20_03", "pYP20_03",
            "amountof_records_04", "YP80_04", "pYP80_04", "YP50_04", "pYP50_04", "YP20_04", "pYP20_04"];

        
        // let Querystring = "\"order\": " + recordorder + ",";    
        // fields.forEach(myFunction);


        // let selectByordernumber = records.filter((record) => {
        //     return record.order = 1;
        // });


        // const selected_record = records.filter(filterByordernumber);
        // console.log("selected_record: ", selected_record);
        // console.log("selected_record: ", records[recordorder - 1]);
        const selected_record = records[recordorder - 1]
        // const indexOftarget = selected_record.indexOf(fieldData);
        // console.log("selected_record2: ", indexOftarget);

        let IndexOftarget = -1;
        for (let i = 0; i < fields.length; i=i+1) {
            if (fields[i] == fieldData){
                IndexOftarget = i;
                break;
            }
        }

        selected_record[fieldData] = update_record;

        console.log("selected_record2 2: ", fieldData, IndexOftarget, "update_record", update_record, selected_record[IndexOftarget]);

        // for (let i = 2; i < fields.length; i=i+1) {
        //     if (fields[i] == fieldData){
        //         IndexOftarget = i;
        //         break;
        //     }
        // }

        const selected_recordupdated = (({ stockname, amountof_records_01, YP80_01, pYP80_01, YP50_01, pYP50_01, YP20_01, pYP20_01,
            amountof_records_02, YP80_02, pYP80_02, YP50_02, pYP50_02, YP20_02, pYP20_02,
            amountof_records_03, YP80_03, pYP80_03, YP50_03, pYP50_03, YP20_03, pYP20_03,
            amountof_records_04, YP80_04, pYP80_04, YP50_04, pYP50_04, YP20_04, pYP20_04 }) => ({ stockname, amountof_records_01, YP80_01, pYP80_01, YP50_01, pYP50_01, YP20_01, pYP20_01,
                amountof_records_02, YP80_02, pYP80_02, YP50_02, pYP50_02, YP20_02, pYP20_02,
                amountof_records_03, YP80_03, pYP80_03, YP50_03, pYP50_03, YP20_03, pYP20_03,
                amountof_records_04, YP80_04, pYP80_04, YP50_04, pYP50_04, YP20_04, pYP20_04 }))(selected_record);
        console.log("selected_record2 2: ", selected_record );
        console.log("selected_record2 2: ", selected_recordupdated );




        // update record
        const url = "http://localhost:3060/api/data";
        const request = new Request(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selected_recordupdated),
        });
        
        const response1 = await fetch(request);
        
        console.log("record: ", response1.status);
        console.log("record: ", response1);
    }

    const handleNewValue = async ( nativeEvent ) => {

       

        console.log( "record: value2***: ", nativeEvent.target.value );
        setFormInput(nativeEvent.target.value);

        //
        const userData = nativeEvent.target.dataset.user;
        console.log( "record: ", userData );
        let labelData = userData.split("-")[0] + "-" + nativeEvent.target.dataset.recordorder;

         //
         setEditingLabel(labelData);
         setEditing(true);

        console.log( "record: userData: ", userData );
        console.log( "record: labelData: ", labelData );

        const elementInnertext = nativeEvent.target.dataset.textvalue;
        console.log( "record: elementInnertext: ", labelData );

        // updateRecord( Number(elementInnertext) );
        //
        document.getElementById(labelData).value = elementInnertext;

    }

    // const handleNewValue = ({ record }) => {  
    //     // console.log( "target: ", target.value );
    //     setFormInput(record);
    //     console.log( "record: ", record );
    // }

    function handleClick({ nativeEvent }) {
        
        //
        // updateRecord( Number(nativeEvent.target.value) );
        const labeltext = nativeEvent.target.dataset.labeltext;
        const label_target = nativeEvent.target.id.replace("btn", "label");
        const new_value = document.getElementById(label_target).value;
        // console.log( "document.getElementById", nativeEvent.target.id.replace("btn", "label") );
        // console.log( "document.getElementById", document.getElementById(label_target).value );



        console.log("labeltext: ", labeltext);
        updateRecord( new_value, nativeEvent );


        //
        setEditing(false);
        

        console.log( "target: ", nativeEvent );
        console.log( "record: ", formInput );
        // setClickTarget(target );
    }

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => setupdate(true) });

    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [update, setupdate] = useState(true);

    //
    const [editing, setEditing] = useState(false);
    const [editingLabel, setEditingLabel] = useState(false);
    const [text, setText] = useState("Text");

    //
    const [formInput, setFormInput] = useState("");
    const [clickTarget, setClickTarget] = useState(null)

    const navigate = useNavigate();
    const rowcount = 0;

    // const [records, setRecords] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [update, setupdate] = useState(false);
    // const navigate = useNavigate();
    // const rowcount = 0;

    const fetchDataRecords = async () => {
        // setEditing(true);

        try {

            // Task 2: Fetch gift details
            // const url = "${urlConfig.backendUrl}";
            const url = "http://localhost:3060/api/data";
            const response = await fetch(url);

            // console.log(response)

            if (!response.ok) {
                console.log("Connectivity problem.")
                throw new Error('Connectivity problem.');
                
            }
            const data = await response.json();

            setRecords(data);
            console.log(data);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }        
    };

    // fetchDataRecords();

    // handling events
    const handleBackClick = ( nativeEvent ) => {
        // Task 4: Handle back click
        // navigate(-1);

        console.log( "user-data: ", nativeEvent.target.dataset.user );
        console.log( "recordorder: ", nativeEvent.target.dataset.recordorder );

        var elementInnertext = document.getElementById(nativeEvent.target.dataset.user).innerText;
        console.log( "nativeEvent: ", nativeEvent );
    };

    const handleOnSave = ( nativeEvent ) => {
        console.log( "handleOnSave nativeEvent: ", nativeEvent );
    }

    const downarrowClick = ( nativeEvent ) => {
        console.log( "uparrowClick: ", nativeEvent );
        console.log( "user-data: ", nativeEvent.target.dataset.user );
        console.log( "recordorder: ", nativeEvent.target.dataset.recordorder );

        const userData = nativeEvent.target.dataset.user;
        
        let labelData = userData.split("-")[0] + "-" + nativeEvent.target.dataset.recordorder;

        console.log( "userData: ", userData );
        console.log( "labelData: ", labelData );

        const elementInnertext = document.getElementById(labelData).value;
        const decimalNumber = (parseInt(elementInnertext) === Number(elementInnertext));
        console.log( "elementInnertext:", Number(elementInnertext) ? Number(Number(elementInnertext) + 1).toFixed(decimalNumber ? 0 : 2) : elementInnertext);
        console.log( "elementInnertext:", (isNaN(+elementInnertext) || Number(elementInnertext).toFixed(0) == 0) ? Number(Number(elementInnertext) - 1).toFixed(decimalNumber ? 0 : 2) : elementInnertext);

        if ( Number(elementInnertext).toFixed(0) == 0 ) {
            const asside = Number(elementInnertext) - 1;
            document.getElementById(labelData).value = Number(asside).toFixed(decimalNumber ? 0 : 2);
        }
        else{
            document.getElementById(labelData).value = Number(elementInnertext) ? Number(Number(elementInnertext) - 1).toFixed(decimalNumber ? 0 : 2) : elementInnertext;
        }
    }

    const uparrowClick = ( nativeEvent ) => {
        // console.log( "uparrowClick: ", nativeEvent );
        // console.log( "user-data3333: ", nativeEvent.target.dataset.user );
        // console.log( "recordorder3333: ", nativeEvent.target.dataset.recordorder );

        const userData = nativeEvent.target.dataset.user;
        
        let labelData = userData.split("-")[0] + "-" + nativeEvent.target.dataset.recordorder;

        // console.log( "userData: ", userData );
        // console.log( "labelData3333: ", labelData );              


        // const value = document.getElementById(labelData).getHTML()

        const elementInnertext = document.getElementById(labelData).value;

        // console.log("elementInnertext2222", elementInnertext);

        const decimalNumber = (parseInt(elementInnertext) === Number(elementInnertext));
        // console.log( "elementInnertext333:", Number(elementInnertext) ? Number(Number(elementInnertext) + 1).toFixed(decimalNumber ? 0 : 2) : elementInnertext);

        

        if ( Number(elementInnertext).toFixed(0) == 0 ) {
            const asside = Number(elementInnertext) + 1;
            document.getElementById(labelData).value = Number(asside).toFixed(decimalNumber ? 0 : 2);
        }
        else{
            document.getElementById(labelData).value = Number(elementInnertext) ? Number(Number(elementInnertext) + 1).toFixed(decimalNumber ? 0 : 2) : elementInnertext;
        }
    }

    const createImageID = ( text ) => {

    }

    const createHeaderColumn = ( headercolumn, column1, column2, column3, column4 ) => {
        return <th class="tr_border_fullwidth">
            {/* <tr class="tr_border">
             */}
            <tr>
            <td class="tr_center" colspan="4">{headercolumn}</td>
            </tr>
            <tr class="tr_border_fullwidth">
            <td class="tr_border_fullwidth">{column1}</td>
            <td class="tr_border_fullwidth">{column2}</td>    
            <td class="tr_border_fullwidth">{column3}</td>
            <td class="tr_border_fullwidth">{column4}</td>    
            </tr>
        </th>
    }

    const createFooterColumnRow1 = () => {
        return <table class="td_noborder">
        <tr>
            <th class="td_noborder">โอกาสที่เกิดขึ้นต่อวันที่ Yh=YhP80 ของหุ้น COIN = (จำนสวนข้อมูลทั้งหมด 133 วันเทรด /  จำนวนวันเทรด = 80 วัน) * 80%</th>
        </tr>
        </table>
    
    }

    const createFooterColumnRow2 = () => {
        return <table class="td_noborder">
            <tr>ตัวอย่าง</tr>
            <tr>
            <td colspan="2"class="td_noborder">โอกาสที่เกิดขึ้น ที่ Yh = YhP80 ของหุ้น COIN = </td>
            <td class="td_noborder"><u>133 ครั้ง</u></td>
            <td class="td_noborder">* 80% = 1.3 ครั้ง ต่อ วัน</td>
            </tr>
            <tr class="td_noborder">
            <td class="td_noborder"></td>
            <td class="td_noborder"></td>
            <td class="td_noborder">80 วัน</td>
            <td class="td_noborder"></td>
            </tr>
    </table>
    }

    const createLabelImage = ( labelName, OrderNumber, labelText, nDecimal ) => {
        return <td class="tr_border_fullwidth">
                { createLabelValue( labelName, nDecimal > 0 ? Number(labelText).toFixed(nDecimal).toString( ) : labelText, OrderNumber, nDecimal )  }
                <img id={"image_" + Number( OrderNumber ).toString() + "-1" } data-user={labelName + "-" + Number( OrderNumber ).toString() + "-1" } className={ nDecimal >= 0 ? "image_rightalign" : "image_hidden" } src={img_downarrow} width="24" height="24" data-recordorder={ OrderNumber } onClick={( e ) => downarrowClick( e )} />
                <img id={"image_" + Number( OrderNumber ).toString() + "-2" } data-user={labelName + "-" + Number( OrderNumber ).toString() + "-2" } className={ nDecimal >= 0 ? "image_rightalign" : "image_hidden" } src={img_uparrow} width="24" height="24" data-recordorder={ OrderNumber } onClick={( e ) => uparrowClick( e )} />
                </td>
    }   

    // const createLabelValue = ( create_id, text_value, OrderNumber, nDecimal ) => {
    //     return <EditText id={create_id + "-" + Number( OrderNumber ).toString() } showEditButton defaultValue={text_value} data-user={create_id + "-" + Number( OrderNumber ).toString() } data-recordorder={ OrderNumber } data-decimal={nDecimal} onSave={((e) => handleOnSave(e))} ><EditTextarea></EditTextarea></EditText>
    // }

    // "label_1", record.order, record.amountof_records_01, 0 
    // const createLabelValue2 = ( labelName, OrderNumber, labelText, nDecimal ) => {

    // return { editing } ? (<><input value={labelText} onchange={(e) => setText(e.target.value)} /><button onClick={() => setEditing(false)}>save</button></>  ) : ( 
    //     <>{labelText}<button onClick={() => setEditing(true)}>edit</button></>  ) } 
    

    const getvalue_textlabel = ( label_id, labelText ) => {
        // 

        

        if (editingLabel === label_id){
            // setFormInput(labelText)
            return formInput;
        }
        else {
            // setFormInput(labelText)
            return labelText;
        }
    }

    const createLabelValue = ( labelName, OrderNumber, labelText, nDecimal, variableName ) => {
        return  <td class="tr_border_fullwidth">
                <table>
                <tr>
                    {/* <th><input id="my_inputsample" type="text" value={labelText} onChange={(e) => updateRecord(e.target.value)}></input></th> */}
                    <th><input className="textbox_01" name={labelName + "-" + Number( OrderNumber ).toString()} id={labelName + "-" + Number( OrderNumber ).toString()} type="text" value={editing? getvalue_textlabel(labelName + "-" + Number( OrderNumber ).toString(), labelText):labelText} data-user={labelName + "-" + Number( OrderNumber ).toString()} data-recordorder={ OrderNumber } data-textvalue={labelText} onChange={(e) => handleNewValue(e)}></input></th>
                    <th><input type="button" id={labelName.replace("label", "btn") + "-" + Number( OrderNumber ).toString()} className="button-add" data-user={ variableName } data-labeltext={ labelText } data-recordorder={ OrderNumber } onClick={(e) => { handleClick(e)}} ></input></th>
                    <img id={"image_" + Number( OrderNumber ).toString() + "-1" } data-user={labelName + "-" + Number( OrderNumber ).toString() + "-1" } className={ nDecimal >= 0 ? "image_rightalign" : "image_hidden" } src={img_downarrow} width="24" height="24" data-recordorder={ OrderNumber } onClick={( e ) => downarrowClick( e )} />
                    <img id={"image_" + Number( OrderNumber ).toString() + "-2" } data-user={labelName + "-" + Number( OrderNumber ).toString() + "-2" } className={ nDecimal >= 0 ? "image_rightalign" : "image_hidden" } src={img_uparrow} width="24" height="24" data-recordorder={ OrderNumber } onClick={( e ) => uparrowClick( e )} />
                    {/* handleNewValue */}
                </tr>
                </table></td>
    }


    useEffect(() => {
        
        const time = new Date();
        time.setSeconds(time.getSeconds() + 30); // 10 minutes timer
        console.log('Listening (2): ', update, time.getSeconds());
        

        if (update){
            fetchDataRecords();
            setupdate(false);
            restart(time);
            // updateUI();
            window.scrollTo(0, 0);
        }
        
        // update formInput
        setFormInput(formInput);


     }, [update, loading, formInput]);

    return( <>
        {/* display timer option */}
        {/* <div style={{fontSize: '20px'}}>
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div> */}

        <div>
        {/* <MyTimer expiryTimestamp={time} /> */}
        </div>
        <div>
        {/* <Timer/> */}
        {/* <Header name="Jirayu" /> */}
        <p>ค่า Y ที่อยู่ในช่วงขาขึ้นตั้งแต่วันที่ 6 มิ.ย. 2567 - 30 ก.ย. 2567 (80 วันเทรด)</p>
        <div className="row">
        <div>
            <p>
        <tbody>
            <tr>
            <th>{ createLabelValue( "label_33", 0, "order", -1, "label_33" )  }</th>
            {/* "label_1", record.order, record.amountof_records_01, 0 */}
            <th>
            { createLabelValue( "label_34", 0, "stockname", -1, "label_34" )  }
            </th>

            {/* period 1 */}
            { createHeaderColumn("กราฟ 15 วินาที ค่า -y ", "โอกาสที่เกิดขึ้นต่อวัน", "-Y = -YP80", "-Y = -YP50", "-Y = -YP20") }                        
            {/* end period 1 */}
            {/* <th>{ createLabelValue( "label_35", "stockname" )  }</th> */}

            {/* period 2 */}
            { createHeaderColumn("กราฟ 15 วินาที ค่า +y ", "โอกาสที่เกิดขึ้นต่อวัน", "+Y = +YP80", "+Y = +YP50", "+Y = +YP20") }
            {/* end period 2 */}
            {/* <th>{ createLabelValue( "label_36", "stockname" )  }</th> */}

            {/* period 3 */}                      
            { createHeaderColumn("กราฟ 15 วินาที ค่า -Yh ", "โอกาสที่เกิดขึ้นต่อวัน", "-Y = -YP80", "-Y = -YP50", "-Y = -YP20") }
            {/* end period 3 */}
            {/* <th>{ createLabelValue( "label_37", "stockname" )  }</th> */}

            {/* period 4 */}
            { createHeaderColumn("กราฟ 15 วินาที ค่า Yh ", "โอกาสที่เกิดขึ้นต่อวัน", "+Y = +YP80", "+Y = +YP50", "+Y = -YP20") }
            {/* end period 4 */}

            </tr>
            
            {records.map((record) => (
            <tr key={record.order}>
            <td className="tr_centerborder">{record.order}</td>                        

            {/* period 1 */}
            <td className="tr_centerborder">{record.stockname}</td>
            <th>
            <tr colspan="4" class="tr_border_fullwidth">
            {/* LabelText with action */}
            { createLabelValue( "label_1", record.order, record.amountof_records_01, 0, "amountof_records_01" ) }      
            {/* { document.getElementById("label_1-1").innerText  }                   */}
            {/* LabelText with action */}

            {/* LabelText with action */}
            { createLabelValue( "label_2", record.order, record.YP80_01, 2, "YP80_01" ) }                        
            {/* LabelText with action */}

            {/* LabelText with action */}
            { createLabelValue( "label_3", record.order, record.YP50_01, 2, "YP50_01" ) }                        
            {/* LabelText with action */}

            {/* LabelText with action */}
            { createLabelValue( "label_4", record.order, record.YP20_01, 2, "YP20_01" ) }                        
            {/* LabelText with action */}

            </tr>
            <tr colspan="4" class="tr_border_fullwidth">

            {/* LabelText with action */}
            { createLabelValue( "label_5", record.order, "โอกาสที่เกิดขึ้นต่อวัน", -1, "label_5" ) }                        
            {/* LabelText with action */}

            {/* LabelText with action */}
            { createLabelValue( "label_6", record.order, record.pYP80_01, 2, "pYP80_01" ) }                        
            {/* LabelText with action */}

            {/* LabelText with action */}
            { createLabelValue( "label_7", record.order, record.pYP50_01, 2, "pYP50_01" ) }                        
            {/* LabelText with action */}

            {/* LabelText with action */}
            { createLabelValue( "label_8", record.order, record.pYP20_01, 2, "pYP20_01" ) }                        
            {/* LabelText with action */}

            </tr>
            </th>

            {/* period 2 */}
            <th>
            <tr colspan="4" class="tr_border_fullwidth">
            {/* <td class="tr_border_fullwidth">                         */}

            {/* LabelText with action */}
            { createLabelValue( "label_9", record.order, record.amountof_records_02, 0 , "amountof_records_02") }                        
            {/* LabelText with action */}
            
            
            {/* LabelText with action */}
            { createLabelValue( "label_10", record.order, record.YP80_02, 2, "YP80_02" ) }                        
            {/* LabelText with action */}

            {/* LabelText with action */}
            { createLabelValue( "label_11", record.order, record.YP50_02, 2, "YP50_02" ) }                        
            {/* LabelText with action */}

            {/* LabelText with action */}
            { createLabelValue( "label_12", record.order, record.YP20_02, 2, "YP20_02" ) }                        
            {/* LabelText with action */}
            {/* </td> */}
            </tr>
            <tr colspan="4" class="tr_border_fullwidth">
            {/* LabelText with action */}
            { createLabelValue( "label_13", record.order, "โอกาสที่เกิดขึ้นต่อวัน", -1, "label_13" ) }                        
            {/* LabelText with action */}
            {/* <td class="tr_border_fullwidth">โอกาสที่เกิดขึ้นต่อวัน</td> */}
            {/* LabelText with action */}
            { createLabelValue( "label_14", record.order, record.pYP80_02, 2, "pYP80_02" ) }                        
            {/* LabelText with action */}
            {/* <td class="tr_border_fullwidth">{record.pYP80_02}</td>     */}
            {/* LabelText with action */}
            { createLabelValue( "label_15", record.order, record.pYP50_02, 2, "pYP50_02" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_16", record.order, record.pYP20_02, 2, "pYP20_02" ) }                        
            {/* LabelText with action */}    
            </tr>
            </th>
            {/* end of period 2 */}

            {/* period 3 */}
            <th>
            <tr colspan="4" class="tr_border_fullwidth">                       
            
            {/* <td class="tr_border_fullwidth">  */}
            {/* LabelText with action */}
            { createLabelValue( "label_17", record.order, record.amountof_records_03, 0, "amountof_records_03" ) }                        
            {/* LabelText with action */}

            {/* </td> */}
            {/* LabelText with action */}
            { createLabelValue( "label_18", record.order, record.YP80_03, 2, "YP80_03" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_19", record.order, record.YP50_03, 2, "YP50_03" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_20", record.order, record.YP20_03, 2, "YP20_03" ) }                        
            {/* LabelText with action */}   
            </tr>
            <tr colspan="4" class="tr_border_fullwidth">
            {/* LabelText with action */}
            { createLabelValue( "label_21", record.order, "โอกาสที่เกิดขึ้นต่อวัน", -1, "label_21" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_22", record.order, record.pYP80_03, 2, "pYP80_03" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_23", record.order, record.pYP50_03, 2, "pYP50_03" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_24", record.order, record.pYP20_03, 2, "pYP20_03" ) }                        
            {/* LabelText with action */}    
            </tr>
            </th>
            {/* end of period 3 */}

            {/* period 4 */}
            <th>
            <tr colspan="4" class="tr_border_fullwidth">
            {/* LabelText with action */}
            { createLabelValue( "label_25", record.order, record.amountof_records_04, 0, "amountof_records_04" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_26", record.order, record.YP80_04, 2, "YP80_04" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_27", record.order, record.YP50_04, 2, "YP50_04" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_28", record.order, record.YP20_04, 2, "YP20_04" ) }                        
            {/* LabelText with action */}
            </tr>
            <tr colspan="4" class="tr_border_fullwidth">

            {/* LabelText with action */}
            { createLabelValue( "label_29", record.order, "โอกาสที่เกิดขึ้นต่อวัน", -1, "label_29" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_30", record.order, record.pYP80_04, 2, "pYP80_04" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_31", record.order, record.pYP50_04, 2, "pYP50_04" ) }                        
            {/* LabelText with action */}
            {/* LabelText with action */}
            { createLabelValue( "label_32", record.order, record.pYP20_04, 2, "pYP20_04" ) }                        
            {/* LabelText with action */}
            </tr>
            </th>
            {/* end of period 4 */}
            </tr>
        ))}
        </tbody>
            </p>
        </div>
        {/* ))} */}
        </div>
        <div>    
    </div>
    { createFooterColumnRow1() }
    { createFooterColumnRow2() }

    </div></>)
}



export default App;

// export default function App() {

    

//     const time = new Date();
//     time.setSeconds(time.getSeconds() + 5); // 10 minutes timer

//     return 
//   }

//   export default function App() {
//     const time = new Date();
//     time.setSeconds(time.getSeconds() + 5); // 10 minutes timer
    

//     return (
//       <div>
//         {/* <Emitter /> */}
//         <MyTimer expiryTimestamp={time} />
//       </div>
//     );
//   }