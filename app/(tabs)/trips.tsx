import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const upcomingTrips = [
  {
    id: '1',
    destination: 'Bali, Indonesia',
    dates: 'Mar 15 - Mar 22, 2024',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    activities: 3,
  },
  {
    id: '2',
    destination: 'Tokyo, Japan',
    dates: 'Apr 5 - Apr 12, 2024',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    activities: 5,
  },
];

const pastTrips = [
  {
    id: '3',
    destination: 'Paris, France',
    dates: 'Jan 10 - Jan 17, 2024',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    activities: 8,
  },
];

export default function TripsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>My Trips</Text>
        <TouchableOpacity style={styles.newTripButton}>
          <Ionicons name="add" size={24} color="#FFFFFF" />
          <Text style={styles.newTripButtonText}>New Trip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Trips</Text>
        {upcomingTrips.map(trip => (
          <TouchableOpacity key={trip.id} style={styles.tripCard}>
            <Image
              source={{ uri: `${trip.image}?w=400&q=80` }}
              style={styles.tripImage}
            />
            <View style={styles.tripInfo}>
              <Text style={styles.tripDestination}>{trip.destination}</Text>
              <Text style={styles.tripDates}>
                <Ionicons name="calendar-outline" size={14} color="#8E8E93" />
                {' '}{trip.dates}
              </Text>
              <View style={styles.tripMeta}>
                <Text style={styles.tripActivities}>
                  <Ionicons name="map-outline" size={14} color="#8E8E93" />
                  {' '}{trip.activities} activities planned
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Past Trips</Text>
        {pastTrips.map(trip => (
          <TouchableOpacity key={trip.id} style={[styles.tripCard, styles.pastTripCard]}>
            <Image
              source={{ uri: `${trip.image}?w=400&q=80` }}
              style={styles.tripImage}
            />
            <View style={styles.tripInfo}>
              <Text style={styles.tripDestination}>{trip.destination}</Text>
              <Text style={styles.tripDates}>
                <Ionicons name="calendar-outline" size={14} color="#8E8E93" />
                {' '}{trip.dates}
              </Text>
              <View style={styles.tripMeta}>
                <Text style={styles.tripActivities}>
                  <Ionicons name="map-outline" size={14} color="#8E8E93" />
                  {' '}{trip.activities} activities completed
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  newTripButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  newTripButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 4,
  },
  section: {
    padding: 24,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
  },
  tripCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  pastTripCard: {
    opacity: 0.8,
  },
  tripImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  tripInfo: {
    padding: 16,
  },
  tripDestination: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  tripDates: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 8,
  },
  tripMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripActivities: {
    fontSize: 14,
    color: '#8E8E93',
  },
});