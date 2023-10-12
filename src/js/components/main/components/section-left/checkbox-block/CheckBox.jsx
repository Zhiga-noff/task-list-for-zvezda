import React, { useState } from 'react';

import check from '../../../../../../img/chek.svg';
import empty from '../../../../../../img/empty.svg';
import completed from '../../../../../../img/completed.svg';

export const CheckBox = () => {
    const [checkboxImage, setCheckboxImage] = useState(empty)

    const onCLickToCheckbox = () => {

    }

    return (
        <>
            <img src={checkboxImage} alt='' />
        </>
    );
};
