  import React from "react";

 export function StudentComp(props)
 {

     let color = ''
    let comment = ''

     if(props.studentGrade <= 56 && props.studentGrade >= 0 ){
     color = 'red'
     comment = '(poor)'
     }
     if(props.studentGrade >= 57 && props.studentGrade <=75 ){
     color = 'yellow'
     comment = '(ok)'
     }
     if(props.studentGrade >= 76 && props.studentGrade <=85 ){
     color = 'orange'
     comment = '(good)'
     }
     if(props.studentGrade >= 86 && props.studentGrade <=100 ){
     color = 'green'
     comment = '(Excellent)'
     }

     return(
      <h2 style={{backgroundColor : color}}> {props.studentName} - {props.studentId} - {props.studentGrade} - {comment}</h2>
      );



 }

 export function StudentListComp()
 {
     return(
         <ul>
         <li><StudentComp studentName = 'bamba Master' studentId = {1} studentGrade = {54} ></StudentComp></li>
         <li><StudentComp studentName = 'shakshuka Master' studentId = {2} studentGrade = {65} ></StudentComp></li>
         <li><StudentComp studentName = 'kongShuku Master' studentId = {3} studentGrade = {80} ></StudentComp></li>
         <li><StudentComp studentName = 'TaiToast Jutsu Master' studentId = {4} studentGrade = {90} ></StudentComp></li>
        </ul>
      );
 }

