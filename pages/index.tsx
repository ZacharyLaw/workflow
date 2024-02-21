import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useLocalStorage } from "../components/useLocalStorage.js";

import $ from 'jquery';
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    $(document).ready(function() {
      console.log("jQuery is working!");
      console.log($('.lane'))
      console.log($('h1'))
      $('#iframe').on('load', function() {$("#iframe").contents().find("head").append("<style>h1{display:none;}</style>");  });
      $('.lane').load('https://web.chelaile.net.cn/customer_ch5/?1=2&src=webapp_zhongshan#!/linedetail/0760-018-0 h1');

    });
  }, []);
  const [count, setCount] = useLocalStorage("count", 0);
  return (
    <div >
        <h1>Please yolo cors {count}</h1>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <aside className='lane'></aside>
        <iframe id='iframe' src="https://web.chelaile.net.cn/customer_ch5/?1=2&src=webapp_zhongshan#!/linedetail/0760-018-0"></iframe>
    </div>
  );
}