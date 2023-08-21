
//import components from React and React native
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

//import data from utils
import { Screen } from '../../constant/Screen';

//import styles
import {styles} from './styles';


//main function
const Home = ({ navigation }) => {

  //states for managing data
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);


  //fetch data from api with pagination and loader
  const fetchPosts = async (pageNumber) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10`
      );
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      setLoading(false);
      return [];
    }
  };

  //for more data
  const fetchMorePosts = async (pageNumber) => {
    const newPosts = await fetchPosts(pageNumber);
    setPosts([...posts, ...newPosts]);
    setPage(pageNumber);
  };

  const handleLoadMore = () => {
    fetchMorePosts(page + 1);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchPosts(1).then((newPosts) => {
      setPosts(newPosts);
      setPage(1);
      setRefreshing(false);
    });
  };

  //use Effect function for getting data when page loads
  useEffect(() => {
    fetchMorePosts(page);
  }, []);


  //render item for list
  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(Screen.DETAIL_SCREEN, { post: item })}
      >
        <View style={styles.listView}>
          <Text style={styles.listViewText}>{"Tittle :- " + item.title}</Text>
          <Text style={styles.listViewTextBody}>{"Body :- " + item.body}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.contenair}>
      <View style={styles.subContainer}>
        <Text style={styles.headingText}>Home</Text>
      </View>
      <View style={styles.viewList}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>

      {loading && <Text style={styles.loading}>Loading...</Text>}

      <TouchableOpacity style={styles.buttonView}
        onPress={handleLoadMore}
        disabled={loading}>
        <Text style={styles.buttonText}>Load More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;


