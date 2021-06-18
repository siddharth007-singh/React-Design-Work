import React from 'react';


const Fonts = ()=>{
    return(
        <div className="header-text text-center">
            <div className="set">
                <h4 className="text-muted">Best Price to Trade</h4>
                <div className="d-flex justify-content-around align-items-center average-header">
                    <div className="text-center">
                        <div className="average-header-maintext color-green">0.56 %</div>
                        <div className="average-header-subHeading">5 Mins</div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">1.27 %</div>
                        <div className="average-header-subHeading">1 Hour</div>
                    </div>
                    <div>
                        <div className="text-center average-block">
                            <div className="average-heading" style={{paddingBottom:"10px"}} >₹ 29,08,424</div>
                            <div className="average-subText text-white">Average BTC/INR net price including commission</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">6.24 %</div>
                        <div className="average-header-subHeading">1 Day</div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">8.82 %</div>
                        <div className="average-header-subHeading">7 Days</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fonts