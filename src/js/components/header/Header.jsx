import React from 'react';
import style from '../../../scss/modules/header/Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <h1>TASKS</h1>
      </div>
      <div className={style.emptiness} />
    </header>
  );
};
