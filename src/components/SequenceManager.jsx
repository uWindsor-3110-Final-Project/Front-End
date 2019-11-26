import React from 'react';
//import './App.css';
//import "bootstrap/dist/css/bootstrap.min.css";

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

const pxToMm = (px) => {
  return Math.floor(px/document.getElementById('sequence').offsetHeight);
};

const mmToPx = (mm) => {
  return document.getElementById('sequence').offsetHeight*mm;
};

const range = (start, end) => {
  return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
};

class SequenceManager extends React.Component {
  constructor(props) {
    super(props);
    this.captureRef = React.createRef();
    this.displayRef = React.createRef();
  }

  getScreenshotHandler = () => {
    html2canvas(this.captureRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");
    });
  };
  render(){
    return (
        <div id={"sequence"}>
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
          <div className="col align-left">
            Year Four
          </div>
          <div className="table-responsive-sm-3" className="col align-self-center">
            <table className="table table-striped table-dark table-bordered table-hover table-sm " align="right">
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
          <div>
            <button type="button" class="btn btn-primary">CREATE SEQUENCE</button> <button type="button" class="btn btn-primary">MANAGE SEQUENCE</button> <button type="button" class="btn btn-primary">VIEW SEQUENCE</button> <button type="button" class="btn btn-primary">DELETE SEQUENCE</button> <button type="button" class="btn btn-primary" onClick={
            () => {
              const input = document.getElementById("sequence");
              const inputHeightMm = pxToMm(input.offsetHeight);
              const a4WidthMm = 210;
              const a4HeightMm = 297;
              const a4HeightPx = mmToPx(a4HeightMm);
              const numPages = inputHeightMm <= a4HeightMm ? 1 : Math.floor(inputHeightMm/a4HeightMm) + 1;
              console.log({
                input, inputHeightMm, a4HeightMm, a4HeightPx, numPages, range: range(0, numPages),
                comp: inputHeightMm <= a4HeightMm, inputHeightPx: input.offsetHeight
              });


              html2canvas(input)
                  .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    let pdf;
                    // Document of a4WidthMm wide and inputHeightMm high
                    if (inputHeightMm > a4HeightMm) {
                      // elongated a4 (system print dialog will handle page breaks)
                      pdf = new jsPDF('p', 'mm', [inputHeightMm+16, a4WidthMm]);
                    } else {
                      // standard a4
                      pdf = new jsPDF();
                    }

                    pdf.addImage(imgData, 'PNG', 0, 0);
                    pdf.save(`${"sequence"}.pdf`);
                  });}
          }>EXPORT SEQUENCE</button>
          </div>
        </div>
    );
  }
}

export  {SequenceManager};
