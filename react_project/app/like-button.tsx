'use client';

import { useState } from "react";
import { createStore } from 'redux';
import reducer from "../reducers/page"
import { increase_likes } from "../actions/page";

const iniitalLikes = { likes: 0 }
const store = createStore(reducer, iniitalLikes);

export default function LikeButton() {

    const [likes, setLikes] = useState(0);

    function handlelikeclick() {
        // setLikes(likes + 1);
        store.dispatch(increase_likes(store.getState().likes))
        setLikes(store.getState().likes)
    }

    return(
        <button onClick={handlelikeclick}>Likes {likes}</button>
    );
} 