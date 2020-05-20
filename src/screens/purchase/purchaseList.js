import React, {useState, useEffect} from 'react';
import {PurchaseListContainer} from '../../components/containers/PurchaseList';
import {Container} from './styles';

const PurchaseListScreen = () => (
  <Container>
    <PurchaseListContainer />
  </Container>
);

export default PurchaseListScreen;
