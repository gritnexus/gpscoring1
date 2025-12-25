import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EEE9',
  },
  scrollContent: {
    paddingBottom: 120, // Space for bottom nav
  },
  headerCard: {
    backgroundColor: '#2D7E3E',
    margin: 16,
    borderRadius: 20,
    padding: 20,
    // Add subtle pattern or gradient overlay effect if possible, for now solid green
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0E0E0',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  badge: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: '#FFC107',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
  badgeText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  badgeSubText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  welcomeText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    color: '#A5D6A7', // Light green
    fontSize: 12,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 0,
    gap: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  statLabel: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // Event Card
  eventCard: {
    backgroundColor: '#2D7E3E',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    minHeight: 200,
    justifyContent: 'center',
  },
  eventTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  eventDescription: {
    color: '#E8F5E9',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 20,
  },
  eventButton: {
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 25,
  },
  eventButtonText: {
    color: '#2D7E3E',
    fontWeight: 'bold',
    fontSize: 12,
  },

  // Section Headers
  sectionTitle: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },

  // Sponsors
  sponsorsCard: {
    backgroundColor: '#2D7E3E',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 20,
    padding: 16,
  },
  sponsorsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 8,
  },
  sponsorItem: {
    flex: 1,
    alignItems: 'center',
  },
  sponsorLogoBox: {
    backgroundColor: '#FFF',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  sponsorBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    minWidth: 60,
    alignItems: 'center',
  },
  badgePlatinum: { backgroundColor: '#4CA1AF' }, // Adjusted roughly to image
  badgeGold: { backgroundColor: '#FBC02D' },
  badgeSilver: { backgroundColor: '#90A4AE' },
  sponsorBadgeText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
  },

  // Schedule
  scheduleCard: {
    backgroundColor: '#2D7E3E',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scheduleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  scheduleText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  statusBadge: {
    backgroundColor: '#1B5E20',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#81C784',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // Custom Navigation
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: Platform.OS === 'ios' ? 30 : 24,
    backgroundColor: 'transparent',
  },
  bottomNavBg: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 24,
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 12,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 8,
  },
  navIcon: {
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 9,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
  homeButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,
    shadowColor: '#6200EE',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  homeLabel: {
    fontSize: 9,
    color: '#FFF',
    fontWeight: 'bold',
    marginTop: 2,
  },
});
