import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/layout'

const Title = styled.h1`
  color: palevioletred;
`;

const IndexPage = () => (
  <Layout>
    <Title>Hi people</Title>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
