import React from 'react';

import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { popupConfirmAction } from '../../../reducer/popup';

const PopupConfirm = () => {
    const { popupConfirm } = useSelector((state) => state.popupReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const gotoNo = () => {
        history.push('/');
        dispatch(popupConfirmAction(false, ''));
    };

    const gotoYes = () => {
        window.location = popupConfirm.link; //reset
        dispatch(popupConfirmAction(false, ''));
    };

    return (
        <>
            <div className="center_pop full_btn_pop noloc_popup" style={{ display: 'block' }}>
                <div>
                    <div>
                        <h2>{popupConfirm.msg}</h2>

                        <p>{popupConfirm.msgDes}</p>

                        <div className="pop_two_btn">
                            <ul class="floatclear">
                                <li>
                                    <button className="no_btn" onClick={gotoNo}>
                                        아니요
                                    </button>
                                </li>
                                <li>
                                    <button className="yes_btn" onClick={gotoYes}>
                                        예
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopupConfirm;
