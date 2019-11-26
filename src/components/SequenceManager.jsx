import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";




class SequenceManager extends React.Component {
render(){
  return (
    <div className="App">
      <div class="col align-left">
      Year One
    </div>
      <div class="table-responsive-sm-3" class="col align-self-center">
      <table class="table table-striped table-dark table-bordered table-hover table-sm " align="right" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fall</th>
      <th scope="col">Winter</th>
      <th scope="col">Summer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>COMP_1000</td>
      <td>COMP_1410</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>COMP_1400</td>
      <td>MATH_1730</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>MATH_1200</td>
      <td>MATH_1020</td>
      <td></td>
    </tr>
  </tbody>
</table>
    </div>
      <div class="col align-left">
      Year Two
    </div>
      <div class="table-responsive-sm-3" class="col align-self-center">
      <table class="table table-striped table-dark table-bordered table-hover table-sm " align="right" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fall</th>
      <th scope="col">Winter</th>
      <th scope="col">Summer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>COMP_2120</td>
      <td>COMP_2140</td>
      <td>CO-OP</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>COMP_2540</td>
      <td>COMP_2800</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>COMP_2560</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
    </div>
      <div class="col align-left">
      Year Three
    </div>
      <div class="table-responsive-sm-3" class="col align-self-center">
      <table class="table table-striped table-dark table-bordered table-hover table-sm " align="right" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fall</th>
      <th scope="col">Winter</th>
      <th scope="col">Summer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>COMP_3110</td>
      <td>COMP_3300</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>COMP_3150</td>
      <td>COMP_3400</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>COMP_3220</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
    </div>
      <div>
      <button type="button" class="btn btn-primary">CREATE SEQUENCE</button> <button type="button" class="btn btn-primary">MANAGE SEQUENCE</button> <button type="button" class="btn btn-primary">VIEW SEQUENCE</button> <button type="button" class="btn btn-primary">DELETE SEQUENCE</button> <button type="button" class="btn btn-primary">EXPORT SEQUENCE</button>
      </div>
      </div>
  );
}
}

export default SequenceManager;
