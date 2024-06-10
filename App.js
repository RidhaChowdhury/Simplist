import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, CheckBox } from '@ui-kitten/components';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to Simplist</Text>
      </Layout>
    </ApplicationProvider>
  );
}
