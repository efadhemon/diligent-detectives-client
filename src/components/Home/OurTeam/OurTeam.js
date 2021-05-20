import React from 'react';
import './OurTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Member1 from '../../../images/team-member/1.jpg';
import Member2 from '../../../images/team-member/2.jpg';
import Member3 from '../../../images/team-member/3.jpg';
import Member4 from '../../../images/team-member/4.jpg';

const OurTeam = () => {

    const teamMembers = [
        {
            id: 1,
            name: 'JONH WELSON',
            title: 'Project Manager',
            image: Member1,
            socials: [{ link: '#', icon: faFacebookF }, { link: '#', icon: faTwitter }, { link: '#', icon: faInstagram }, { link: '#', icon: faLinkedinIn }],
            animation: 'fade-right'
        }, {
            id: 2,
            name: 'JONH WELSON',
            title: 'Project Manager',
            image: Member2,
            socials: [{ link: '#', icon: faFacebookF }, { link: '#', icon: faTwitter }, { link: '#', icon: faInstagram }, { link: '#', icon: faLinkedinIn }],
            animation: 'fade-up'
        }, {
            id: 3,
            name: 'JONH WELSON',
            title: 'Project Manager',
            image: Member3,
            socials: [{ link: '#', icon: faFacebookF }, { link: '#', icon: faTwitter }, { link: '#', icon: faInstagram }, { link: '#', icon: faLinkedinIn }],
            animation: 'fade-down'
        }, {
            id: 4,
            name: 'JONH WELSON',
            title: 'Project Manager',
            image: Member4,
            socials: [{ link: '#', icon: faFacebookF }, { link: '#', icon: faTwitter }, { link: '#', icon: faInstagram }, { link: '#', icon: faLinkedinIn }],
            animation: 'fade-left'
        }
    ];

    return (
        <section id="our-team" className="py-5">
            <div className="container">

                <div className="section-title">
                    <h2>MEET OUR TEAM</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur repellat fugit laboriosam suscipit ratione consequatur.</p>
                </div>

                <div className="row">

                    {
                        teamMembers.map((member => <div key={member.id} data-aos={member.animation} className="col-md-3 d-flex">
                            <div className="team-mate shadow">
                                <div className="team-mate-img">

                                    <img src={member.image} alt="" />

                                    <div className="t-m-s-icon">
                                        {
                                            member.socials.map((social, index) => <a key={index} href={social.link}><FontAwesomeIcon icon={social.icon} /></a>)
                                        }
                                    </div>

                                </div>

                                <div className="team-mate-info">
                                    <h4>{member.name}</h4>
                                    <span>{member.title}</span>
                                </div>
                            </div>
                        </div>))
                    }

                </div>
            </div>
        </section>
    );
};

export default OurTeam;