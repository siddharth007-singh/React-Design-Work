import React from 'react';
import {Table} from 'react-bootstrap';
import { IoMdArrowDropup } from 'react-icons/io';
import { IoMdArrowDropdown } from 'react-icons/io';


const Tables = ()=>{
    return(
        <React.Fragment>
            <div className="text-white">
                <Table responsive="lg" className="table-borderless text-center mt-3 table">
                    <thead>
                        <tr className="text-white table-head">
                            <th>#</th>
                            <th><h4>Platform</h4></th>
                            <th><h4>Last Traded Price</h4></th>
                            <th><h4>Buy / Sell Price</h4></th>
                            <th><h4>Difference</h4></th>
                            <th><h4>Savings</h4></th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        <tr className="des">
                            <td>1</td>
                            <td>Wazir X</td>
                            <td>₹ 29,79,599</td>
                            <td>₹ 29,74,404 / ₹ 29,79,003</td>
                            <td>2.45 %</td>
                            <td><IoMdArrowDropup className="icon"/> ₹ 71,174</td>
                        </tr>
                        <div className="mt-3"></div>
                        <tr className="des">
                            <td>2</td>
                            <td>Bitbns</td>
                            <td>₹ 29,78,060</td>
                            <td>₹ 29,73,380 / ₹ 29,74,083</td>
                            <td>2.39 %</td>
                            <td><IoMdArrowDropup className="icon"/> ₹ 69,635</td>
                        </tr>
                        <div className="mt-3"></div>
                        <tr className="des">
                            <td>3</td>
                            <td>Goitus</td>
                            <td>₹ 29,72,000</td>
                            <td>₹ 29,72,000 / ₹ 29,86,750</td>
                            <td>2.19 %</td>
                            <td><IoMdArrowDropup className="icon"/>₹ 63,575</td>
                        </tr>
                        <div className="mt-3"></div>
                        <tr className="des">
                            <td>4</td>
                            <td>Colodax</td>
                            <td>₹ 25,83,138</td>
                            <td>₹ 25,75,167 / ₹ 26,08,984</td>
                            <td style={{color:"red"}}>-11.18 %</td>
                            <td style={{color:"red"}}><IoMdArrowDropdown className="icon"/> ₹ 3,25,286</td>
                        </tr>
                        <div className="mt-3"></div>
                        <tr className="des">
                            <td>5</td>
                            <td>Zebpay</td>
                            <td>₹ 29,65,400</td>
                            <td>₹ 29,74,900 / ₹ 29,65,400</td>
                            <td>1.96 %</td>
                            <td><IoMdArrowDropup className="icon"/> ₹ 56,975</td>
                        </tr>
                        <div className="mt-3"></div>
                        <tr className="des">
                            <td>6</td>
                            <td>CoinDCX</td>
                            <td>₹ 29,72,350</td>
                            <td>₹ 29,70,456 / ₹ 29,72,350</td>
                            <td>2.20 %</td>
                            <td><IoMdArrowDropup className="icon"/> ₹ 63,926</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </React.Fragment>
    )
}

export default Tables
