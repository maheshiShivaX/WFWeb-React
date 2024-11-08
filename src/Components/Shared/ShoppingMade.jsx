import '../../ComponentsCSS/ShoppingMade.css';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const ShoppingMade = () => {
    const shoppingRef = useRef(null);

    useEffect(() => {
      const element = shoppingRef.current;
  
      // Animate left images
      gsap.fromTo(
        element.querySelectorAll('.img-left'),
        { x: '-100%' },
        {
          x: '0%',
          scrollTrigger: {
            trigger: element,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
  
      // Animate right images
      gsap.fromTo(
        element.querySelectorAll('.img-right'),
        { x: '100%' },
        {
          x: '0%',
          scrollTrigger: {
            trigger: element,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
  
      // Animate center image
      gsap.fromTo(
        element.querySelectorAll('.img-center'),
        { scale: 0.8 },
        {
          scale: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          },
        }
      );
    }, []);


    return (
        <div className='shoppingmade_bg' ref={shoppingRef}>
          <div className='shoppingmade_content'>
            <h2>Shopping Made Smart</h2>
            <p>Deals await on the shopper's phone. Every experience is made profitable with trunow loya</p>
            <div className='shoppingmade_content_btn'>
              <ul>
                <li><a href="#" className='active'>Get Started</a></li>
                <li><a href="#">Try Free Trial</a></li>
              </ul>
            </div>
            <div className='shoppingmade_left_side_wepper'>
              <div className='shoppingmade_left_side_img'>
                <img src="./images/shopping-mood-left.png" alt="" className='light_overlay img-left' />
                <img src="./images/shopping-mood-left1.png" alt="" className='shopping_img_set_left img-left' />
              </div>
              <div className='shoppingmade_center'>
                <img src="./images/shopping-mood-center.png" alt="" className='img-center'/>
              </div>
              <div className='shoppingmade_right_side_img'>
                <img src="./images/shopping-mood-left1.png" alt="" className='shopping_img_set_right img-right' />
                <img src="./images/shopping-mood-right.png" alt="" className='light_overlay right_margin_set img-right' />
              </div>
            </div>
          </div>
        </div>
      );
    };


export default ShoppingMade;