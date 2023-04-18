import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import data from '../../utils/data'
import Layout from '../../components/Layout'

export default function ProductScreen(props) {
    const { query } = useRouter();
    const { slug } = query;
    const product = data.product.find((x) => x.slug === slug)
    const { state, dispatch } = useContext(Store);
    const router = useRouter();
    if (!product) {
      return <Layout title="Produt Not Found">Produt Not Found</Layout>;
    }  return (
      <Layout>
        <h1> {product.name} </h1>

      </Layout>
    
    )
}
