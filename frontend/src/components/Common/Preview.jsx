import React, { useEffect, useState } from 'react';

import img20 from '../../assets/img/img20.png';

import { getFavourites } from '../../reducks/favourites/selectors';
import API from '../../API';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '../../reducks/favourites/operations';
import Categories from '../../containers/Categories';

const api = new API();

function Preview({ setShowPreview, selectedImageId }) {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const [image, setImage] = useState(null);
    const [showFavourite, setShowFavourite] = useState(true);
    const favourites = getFavourites(selector);
    useEffect(() => {
        api.getImage(selectedImageId)
            .then(image => {
                setImage(image);
            })
            .catch(error => {
                alert('Failed to connect API: /images/:id/');
            });
    }, []);

    const clickFavourite = image => {
        setShowFavourite(false);
        dispatch(addFavourite(image));
    };
    return (
        <section class="page3">
            <div class="blur">
                <img src={Categories} alt="" />
            </div>
            <section class="preview">
                <img class="preview-main" src={img20} alt="" />
                <div class="preview-sub">
                    {image && <img src={'https://res.cloudinary.com/db7seyozi/' + image.image} alt="" />}
                </div>
            </section>
        </section>
    );
}

export default Preview;
