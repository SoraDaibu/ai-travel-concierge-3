import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const bookings = [
  {
    id: '1',
    type: 'activity',
    name: 'Sunset Beach Yoga',
    location: 'Bali, Indonesia',
    date: 'Mar 16, 2024',
    time: '5:30 PM',
    status: 'confirmed',
    price: 25,
  },
  {
    id: '2',
    type: 'hotel',
    name: 'Luxury Ocean Resort',
    location: 'Bali, Indonesia',
    date: 'Mar 15 - Mar 22, 2024',
    status: 'confirmed',
    price: 1200,
  },
  {
    id: '3',
    type: 'restaurant',
    name: 'Traditional Balinese Dinner',
    location: 'Bali, Indonesia',
    date: 'Mar 17, 2024',
    time: '7:00 PM',
    status: 'pending',
    price: 45,
  },
];

const getIconName = (type: string) => {
  switch (type) {
    case 'activity':
      return 'bicycle';
    case 'hotel':
      return 'bed';
    case 'restaurant':
      return 'restaurant';
    default:
      return 'calendar';
  }
};

export default function BookingsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
      </View>

      <View style={styles.filters}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.filterButton, styles.filterButtonActive]}>
            <Text style={[styles.filterText, styles.filterTextActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Hotels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Restaurants</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.bookingsList}>
        {bookings.map(booking => (
          <TouchableOpacity key={booking.id} style={styles.bookingCard}>
            <View style={styles.bookingIcon}>
              <Ionicons name={getIconName(booking.type)} size={24} color="#007AFF" />
            </View>
            <View style={styles.bookingInfo}>
              <Text style={styles.bookingName}>{booking.name}</Text>
              <Text style={styles.bookingLocation}>
                <Ionicons name="location-outline" size={14} color="#8E8E93" />
                {' '}{booking.location}
              </Text>
              <Text style={styles.bookingDate}>
                <Ionicons name="calendar-outline" size={14} color="#8E8E93" />
                {' '}{booking.date}
                {booking.time && ` • ${booking.time}`}
              </Text>
            </View>
            <View style={styles.bookingMeta}>
              <Text style={styles.bookingPrice}>${booking.price}</Text>
              <View style={[
                styles.statusBadge,
                booking.status === 'confirmed' ? styles.statusConfirmed : styles.statusPending
              ]}>
                <Text style={[
                  styles.statusText,
                  booking.status === 'confirmed' ? styles.statusTextConfirmed : styles.statusTextPending
                ]}>
                  {booking.status}
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
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  filters: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginRight: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  filterButtonActive: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  bookingsList: {
    padding: 24,
  },
  bookingCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
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
  bookingIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  bookingInfo: {
    flex: 1,
  },
  bookingName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  bookingLocation: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 4,
  },
  bookingDate: {
    fontSize: 14,
    color: '#8E8E93',
  },
  bookingMeta: {
    alignItems: 'flex-end',
  },
  bookingPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#007AFF',
    marginBottom: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusConfirmed: {
    backgroundColor: '#E8FFF3',
  },
  statusPending: {
    backgroundColor: '#FFF9E8',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  statusTextConfirmed: {
    color: '#34C759',
  },
  statusTextPending: {
    color: '#FF9500',
  },
});