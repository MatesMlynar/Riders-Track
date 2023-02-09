import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {HeaderComponent} from '@/components/header';
import {Container, Box, Paper, Input, Typography } from '@mui/material'
import  {MainHeaderComponent} from '@/components/main-header';
import { BenefitsComponent } from '@/components/benefits';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
          {/*Header*/}
          <HeaderComponent/>
          {/*Main Header*/}
          <MainHeaderComponent/>
          {/*Benefits*/}
          <BenefitsComponent/>
    </>
  )
}
