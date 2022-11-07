import jacket1min from '../../aseets/products/jacket1min.jpg'
import shoe1min from '../../aseets/products/shoe1min.jpg'
import sock1min from '../../aseets/products/sock1min.jpg'
import sweater2min from '../../aseets/products/sweater2min.jpg'
import watch1min from '../../aseets/products/watch1min.jpg'
import bottoms1min from '../../aseets/products/bottoms1min.jpg'

import slider_1 from '../../aseets/slider_1.jpg'
import slider_2 from '../../aseets/slider_2.jpg'
import { BsTruck } from 'react-icons/bs'
import { BsShieldLock } from 'react-icons/bs'
import { AiOutlineReload } from 'react-icons/ai'
export const header = [
  {
    bgc: slider_1,
    h1: 'Sell products the easy way with UntreeStore by',
    span: 'hesham .com',
    btn: 'explore now',
  },
  {
    bgc: slider_2,
    h1: 'The New Way To Sell Your Products by',
    span: 'hesham .com',
    btn: 'explore now',
  },
]

export const product = [
  {
    span_1: 'new',
    img: jacket1min,
    span_3: 'Dark Jacker',
    span_4: '£69.00',
  },
  {
    span_1: 'new',
    span_2: 'sale',
    img: bottoms1min,
    span_3: 'shoe1min',
    span_4: '£90.00 - £90.00',
  },
  {
    img: shoe1min,
    span_3: 'Brone shoe',
    span_4: '£29.00',
  },
  {
    img: sock1min,
    span_3: 'the modern sock',
    span_4: '£29.00',
  },
  {
    span_2: 'sale',
    img: sweater2min,
    span_3: 'shoe1min',
    span_4: '£90.00 - £90.00',
  },
  {
    span_2: 'sale',
    img: watch1min,
    span_3: 'shoe1min',
    span_4: '£90.00 - £90.00',
  },
]

export const worldwide = [
  {
    icon: <BsTruck />,
    h2: 'WORLDWIDE DELIVERY',
    p: 'Far far away, behind the word mountains, far from the countries.',
  },
  {
    icon: <BsShieldLock />,
    h2: 'SECURE PAYMENTS',
    p: 'Far far away, behind the word mountains, far from the countries.',
  },
  {
    icon: <AiOutlineReload />,
    h2: 'SIMPLE RETURNS',
    p: 'Far far away, behind the word mountains, far from the countries.',
  },
]
