# GlobalTech - assignment 02 full-stack application with node.js and react.js
GlobalTech - assignment 02 full-stack application with node.js and react.js

🧸💬 The sample requirements for creating an application for stock trading with create/update/delete capability. This simple application works as a setup environment and study for testing and communication with a full-stack application and development environment. </br>

🐑💬 ➰ The express server allows for simple web applications with minimum requirements and an adaptive method for integration with high-capacity data records process handling MongoDB and deployment readiness. </br>

🐐💬 There are multiple tasks and we resolved incompatibilities and tools, drew our own UI user control interfaces and active-response function, and displayed visualization value with state message events communication of the react.js for client-side and deployment application on the server at the backend, working as microservices with matching pattern request and response method RestFul API. </br>


<p align="center" width="100%">
    <img width="55%" src="https://github.com/jkaewprateep/GlobalTech_asm02/blob/master/28-application%20architechture.png">
    <img width="25%" src="https://github.com/jkaewprateep/GlobalTech_asm02/blob/master/kid_30.jpg">
    <img width="14.82%" src="https://github.com/jkaewprateep/GlobalTech_asm02/blob/master/kid_38.jpg"> </br>
    <b> Sample application - microservices architecture with backend RESTAPI interfaces and reacts state message and client scripts capability </b> </br>
</p>

🧸💬 The user interface up and down arrows ( <img width="2%" src="https://github.com/jkaewprateep/GlobalTech_asm02/blob/master/up.png">, <img width="2%" src="https://github.com/jkaewprateep/GlobalTech_asm02/blob/master/down.png"> ) allows users to increase/decrease specific value and edit button allows to modify and update the value with update record mechanism <img width="2%" src="https://github.com/jkaewprateep/GlobalTech_asm02/blob/master/down_16x16.png"> . </br>

🐑💬 ➰ User interface control is built as constant as user experience in user interface control web and application for easy deployment with a single command ```{ createLabelValue( "label_25", record.order, record.amountof_records_04, 0, "amountof_records_04" ) } ``` .  </br>

🐐💬 Sample of the constant UI user interfaces in reacts.js . that is how we can access UI data value dynamically and use the state message for update records. </br>

```
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
```

<p align="center" width="100%">
    <img width="80%" src="https://github.com/jkaewprateep/GlobalTech_asm02/blob/master/26-screencapture01.png"> </br>
    <b> Sample screenshots - web upper part </b> </br>
    <img width="80%" src="https://github.com/jkaewprateep/GlobalTech_asm02/blob/master/27-screencapture02.png"> </br>
    <b> Sample screenshots - web lower part </b> </br>
    <img width="80%" src="https://github.com/jkaewprateep/GlobalTech_asm02/blob/master/27-screencapture03.png"> </br>
    <b> Sample screenshots - database communications </b> </br>
</p>

---

<p align="center" width="100%">
    <img width="30%" src="https://github.com/jkaewprateep/advanced_mysql_topics_notes/blob/main/custom_dataset.png">
    <img width="30%" src="https://github.com/jkaewprateep/advanced_mysql_topics_notes/blob/main/custom_dataset_2.png"> </br>
    <b> 🥺💬 รับจ้างเขียน functions </b> </br>
</p>
