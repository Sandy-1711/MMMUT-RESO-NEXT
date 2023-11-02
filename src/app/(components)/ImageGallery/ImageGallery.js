'use client'
import { useEffect } from 'react'
import imagecss from './imagegallery.module.css'
import Image from 'next/image';
export default function ImageGallery() {
    useEffect(function () {
        var caros = document.querySelectorAll(`.${imagecss.caros}`);
        let currentindex = document.querySelector(`.${imagecss.active}`).getAttribute('var');
        let numitems = caros.length;
        // console.log(currentindex);
        var leftclick = document.querySelector(`.${imagecss.backarrow}`)
        var rightclick = document.querySelector(`.${imagecss.rightarrow}`)
        leftclick.addEventListener('click', function () {
            currentindex = document.querySelector(`.${imagecss.active}`).getAttribute('var')
            caros[currentindex].classList.toggle(`${imagecss.active}`)
            currentindex = currentindex - 1;
            if (currentindex < 0) {
                currentindex = numitems - 1;
            }
            caros[currentindex].classList.toggle(`${imagecss.active}`)
        })
        rightclick.addEventListener('click', function () {
            console.log(currentindex);
            caros[currentindex].classList.remove(`${imagecss.active}`)
            currentindex++;
            if (currentindex === numitems) {
                currentindex = 0;
            }
            caros[currentindex].classList.add(`${imagecss.active}`)

        })
        setInterval(() => {
            caros[currentindex].classList.toggle(`.${imagecss.active}`);
            currentindex++;
            if (currentindex === numitems) {
                currentindex = 0;
            }
            caros[currentindex].classList.toggle(`.${imagecss.active}`)

        }, 7000);
    })
    return (
        <div className={imagecss.carousel}>
            <div className={imagecss.caros + ' ' + imagecss.active} var='0'>
                <Image height={500} width={500} src="/1.jpg" alt='1' />
            </div>
            <div className={imagecss.caros} var='1'>
                <Image height={500} width={500} src="/2.jpg" alt='2' />
            </div>
            <div className={imagecss.caros} var='2'>
                <Image height={500} width={500} src="/3.jpg" alt='3' />
            </div>
            <div className={imagecss.caros} var='3'>
                <Image height={500} width={500} src="/4.jpg" alt='4' />
            </div>
            <div className={imagecss.caros} var='4'>
                <Image height={500} width={500} src="/5.jpg" alt='5' />
            </div>
            <div className={imagecss.backarrow} >
                <img src="eventassets/back-arrow.svg" />
            </div>
            <div className={imagecss.rightarrow}>
                <img src="eventassets/right-arrow.svg" />
            </div>
        </div>
    )
}
