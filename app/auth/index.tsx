import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { useAuth } from '@/components/auth/AuthProvider';
import { Ionicons } from '@expo/vector-icons';

export default function AuthScreen() {
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      await signInWithGoogle();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.content}>
          {!imageError ? (
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80' }}
              style={styles.heroImage}
              onError={() => setImageError(true)}
            />
          ) : (
            <View style={[styles.heroImage, styles.heroImageFallback]}>
              <Ionicons name="image-outline" size={48} color="#8E8E93" />
            </View>
          )}

          <Text style={styles.title}>Welcome to Travel Concierge</Text>
          <Text style={styles.subtitle}>
            Sign in to start planning your next adventure
          </Text>

          {error && <Text style={styles.error}>{error}</Text>}

          <View style={styles.form}>
            <TouchableOpacity 
              style={styles.googleButton}
              onPress={handleGoogleSignIn}>
              <View style={styles.googleIconContainer}>
                <Ionicons name="logo-google" size={20} color="#4285F4" />
              </View>
              <Text style={styles.googleButtonText}>
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginBottom: 32,
  },
  heroImageFallback: {
    backgroundColor: '#E5E5EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 32,
    textAlign: 'center',
  },
  form: {
    gap: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  googleIconContainer: {
    width: 24,
    height: 24,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  error: {
    color: '#FF3B30',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
});