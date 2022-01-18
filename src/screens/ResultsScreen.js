import { View, Text, StyleSheet, ScrollView } from "react-native";
import Chart from "../components/Chart";
import { RESULTS } from "../utils/constants";

const ResultsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Resultados</Text>
      <Chart results={RESULTS} />
    </ScrollView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
});
