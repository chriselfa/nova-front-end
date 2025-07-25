import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const PaymentDataView = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://pay.notchpay.co/test.ClPDBC2Pz26h6IWUpYqyuUgUDm1RQiTCOljUnsf6QxgSooAT86fKJ60pseolYkVAK1epjcby0lYeijFSZwXQ7BVJaptPO1O6SbHqiZqZr7iNGObqFTCzMmoUPbQiCR8H')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Erreur: {error}</Text>;
  }

  return (
    <View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default PaymentDataView;