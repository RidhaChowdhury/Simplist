import React from 'react';
import { ApplicationProvider, Layout, Text, IconRegistry, Card, Button } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const App = () => {
  const [items, setItems] = React.useState<string[]>([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  const renderItem = ({ item }: { item: string }) => (
    <Card style={styles.card}>
      <Text>{item}</Text>
    </Card>
  );

  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={styles.container}>
          <Layout style={styles.container}>
            <FlatList
              data={items}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
            <Button style={styles.fab} onPress={addItem}>
              Add Item
            </Button>
          </Layout>
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    margin: 10,
    padding: 20,
    borderRadius: 25,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 50,
  },
});

export default App;
