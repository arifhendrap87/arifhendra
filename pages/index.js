import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Welcome from '../components/Partial/Welcome'
export default function Home() {
  return (
    <Layout>
      <Welcome />
      <h1>asd</h1>
    </Layout>
  )
}



