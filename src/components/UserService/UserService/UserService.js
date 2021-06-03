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
        <div className="row margin-0">
            <div className="col-md-2 padding-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 padding-0">
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