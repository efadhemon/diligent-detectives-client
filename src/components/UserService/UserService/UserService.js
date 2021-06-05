import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import {
    Switch,
    Route
} from "react-router-dom";
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';
import Profile from '../Profile/Profile';
const UserService = () => {



    return (
        <div>
            <Sidebar></Sidebar>
            
            <div className="content">
                <Switch>
                    <Route exact path="/user">
                        <Profile></Profile>
                    </Route>
                    <Route path="/user/book">
                        <Book></Book>
                    </Route>
                    <Route path="/user/booking-list">
                        <BookingList></BookingList>
                    </Route>
                    <Route path="/user/review">
                        <Review></Review>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default UserService;