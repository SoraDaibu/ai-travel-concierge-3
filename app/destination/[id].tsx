import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const activities = [
  {
    id: '1',
    name: 'Sunset Beach Yoga',
    price: 25,
    rating: 4.8,
    duration: '1.5 hours',
  },
  {
    id: '2',
    name: 'Local Food Tour',
    price: 65,
    rating: 4.9,
    duration: '3 hours',
  },
  {
    id: '3',
    name: 'Historical Walking Tour',
    price: 30,
    rating: 4.7,
    duration: '2 hours',
  },
];

export default function DestinationScreen() {
  const { id } = useLocalSearchParams();
  
  // In a real app, fetch destination data based on id
  const destination = {
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    description: 'Discover the magic of Bali, an Indonesian paradise that blends spiritual tranquility with stunning natural beauty. From pristine beaches to lush rice terraces, every corner of this island tells a story.',
    rating: 4.8,
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${destination.image}?w=800&q=80` }}
          style={styles.image}
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{destination.name}</Text>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={20} color="#FFD700" />
            <Text style={styles.rating}>{destination.rating}</Text>
          </View>
        </View>

        <Text style={styles.description}>{destination.description}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Activities</Text>
          {activities.map(activity => (
            <TouchableOpacity key={activity.id} style={styles.activityCard}>
              <View style={styles.activityInfo}>
                <Text style={styles.activityName}>{activity.name}</Text>
                <Text style={styles.activityDuration}>
                  <Ionicons name="time-outline" size={16} color="#8E8E93" />
                  {' '}{activity.duration}
                </Text>
              </View>
              <View style={styles.activityMeta}>
                <Text style={styles.activityPrice}>${activity.price}</Text>
                <TouchableOpacity style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
  },
  content: {
    marginTop: -40,
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: '#F2F2F7',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 12,
  },
  rating: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  activityCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activityInfo: {
    flex: 1,
  },
  activityName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  activityDuration: {
    fontSize: 14,
    color: '#8E8E93',
  },
  activityMeta: {
    alignItems: 'flex-end',
  },
  activityPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 8,
  },
  bookButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});