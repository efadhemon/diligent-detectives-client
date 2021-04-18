import React from 'react';
import './SuccessCases.css'
import case1 from '../../../images/case-1.jpg';
import case2 from '../../../images/case-2.jpg';
import case3 from '../../../images/case-3.jpg';


const CasesData = [
    {
        id : 1,
        name: 'Find A Person',
        img: case1,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, ducimus? Exercitationem veritatis ducimus iusto modi.'
    }, {
        id : 2,
        name: 'Solved Missing Case',
        img: case2,
    }, {
        id : 3,
        name: 'Solved Missing Case',
        img: case3
    }
];

const SuccessCases = () => {
    return (
        <section className="cases-section">
            <div className="container">
                <h1 className="text-center text-uppercase text-brand mb-5">Success Cases</h1>
                <div className="row align-items-center mb-5">
                    <h1 className="col-md-7 text-gradient">-- Checkout Our Recently <br/> Closed Cases</h1>
                    <p className="col-md-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam quidem quos provident. Impedit praesentium cumque soluta iusto atque officiis.</p>
                </div>
                <div className="display-grid-col-3">

                    {
                        CasesData.map(caseData => <div key={caseData.id} className="card cases-card" >
                            <div className="cases-image">
                                <img src={caseData.img} alt="" className="card-img-top" />
                            </div>
                            <div className="card-body text-center cases-details">
                                <h2>{caseData.name}</h2>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section>
    );
};

export default SuccessCases;