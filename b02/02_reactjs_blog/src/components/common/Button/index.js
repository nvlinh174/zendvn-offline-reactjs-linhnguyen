import './Button.css';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

function Button({ type, classes, isBigSize, text, icon, link }) {
    const [localType, setLocalType] = useState('button');
    const [localClass, setLocalClass] = useState('btn-default');
    const [localLink, setLocalLink] = useState('#');

    useEffect(() => {
        if (classes) {
            setLocalClass(classes);
        }
    }, [classes]);

    useEffect(() => {
        if (type) {
            setLocalType(type);
        }
    }, [type]);

    useEffect(() => {
        if (link) {
            setLocalLink(link);
        }
    }, [link]);

    const btnClass = classNames(`m-1 btn ${localClass}`, { 'btn-size-large': isBigSize });
    const btnIcon = icon ? icon : '';

    return {
        link: (
            <a href={localLink} className={btnClass}>
                {btnIcon}
                {text}
            </a>
        ),
        button: (
            <button className={btnClass}>
                {btnIcon}
                {text}
            </button>
        ),
    }[localType];
}

export default Button;
