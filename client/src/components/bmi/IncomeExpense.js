import React from 'react'

export default function IncomeExpense(props) {

  return (
    <div>

<div id="aa10">
<div className="row">
          <div className="col-md-10 mt-5 mx-auto">
       <table className="table table-dark table-striped" id="aa8">
        <thead>
          <tr>
       <th id="aa9"> BMI kg/m2</th>
            <th id="aa9">อยู่ในเกณท์</th>
            <th id="aa9">ภาวะเสี่ยงต่อโรค</th>
            {/* <th>คำแนะนำ</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>น้อยกว่า 18.50</td>
          <td>น้ำหนักน้อย / ผอม</td>
          <td>มากกว่าคนปกติ</td>
          {/* <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td> */}
          </tr>
          <tr>
            <td>ระหว่าง 18.50 - 22.90</td>
            <td>ปกติ (สุขภาพดี)</td>
            <td>เท่าคนปกติ</td>
            {/* <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td> */}
          </tr>
          <tr>
            <td>ระหว่าง 23 - 24.90</td>
            <td>ท้วม / โรคอ้วนระดับ 1</td>
            <td>อันตรายระดับ 1</td>
            {/* <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td> */}
          </tr>
          <tr>
            <td>ระหว่าง 25 - 29.90</td>
            <td>อ้วน / โรคอ้วนระดับ 2</td>
            <td>อันตรายระดับ 2</td>
            {/* <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td> */}
          </tr>
          <tr>
            <td>มากกว่า 30</td>
            <td>อ้วนมาก / โรคอ้วนระดับ 3</td>
            <td>อันตรายระดับ 3</td>
            {/* <td><a href="#"><i className="fas fa-dollar-sign text-primary"></i></a></td> */}
          </tr>
        </tbody>
      
      </table>
    </div>
    </div>
    </div>
    </div>
   

    // <div className="inc-exp-container">
    //   <div>
    //     <h4>Income</h4>
    //     <p className="money plus">฿8000</p>
    //   </div>
    //   <div>
    //     <h4>Expense</h4>
    //     <p className="money minus">฿1450</p>
    //   </div>
    // </div>
  )
}
