import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  searchGroup: { backgroundColor: '#34967C', padding: 20, paddingTop: 60 },
  searchFormGroup: { flexDirection: 'row', backgroundColor: 'white', borderRadius: 30, padding: 10, alignItems: 'center' },
  searchControlGroup: { flex: 1 },
  searchFormText: { fontSize: 12, color: '#888' },
  searchControl: { fontSize: 14 },
  searchButton: { backgroundColor: '#34967C', borderRadius: 20, padding: 8 },
  filterGroup: { flexDirection: 'row', paddingHorizontal: 10, alignItems: 'center', height: 72 },
  filterContainer: { alignItems: 'center', marginHorizontal: 10, width: 60, height: 60 },
  listingContainer: { flex: 1, padding: 16 },
  paginationContainer: { alignItems: 'center', marginVertical: 20 },
  showMoreButton: { backgroundColor: '#34967C', paddingVertical: 12, paddingHorizontal: 40, borderRadius: 30 },
  showMoreButtonText: { color: 'white', fontSize: 16 },
})

export { styles }