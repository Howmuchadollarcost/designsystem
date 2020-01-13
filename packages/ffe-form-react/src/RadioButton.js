import React from 'react';
import { bool, string, oneOfType, func, shape, object } from 'prop-types';
import classNames from 'classnames';

import BaseRadioButton from './BaseRadioButton';

const RadioButton = props => {
    const { className, inline, dark, innerRef, ...rest } = props;

    return (
        <BaseRadioButton
            className={classNames(
                'ffe-radio-button',
                { 'ffe-radio-button--inline': inline },
                className,
            )}
            dark={dark}
            ref={innerRef}
            {...rest}
        />
    );
};

RadioButton.propTypes = {
    /** Additional class names applied to the label */
    className: string,
    /** Ref-setting function, or ref created by useRef, passed to the input element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** Indicates whether the radio button is rendered inline or as a block */
    inline: bool,
    /** Dark variant */
    dark: bool,
};

RadioButton.defaultProps = {
    dark: false,
};

export default RadioButton;
