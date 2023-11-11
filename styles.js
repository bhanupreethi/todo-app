import { StyleSheet } from "react-native";
import { horizontalScale, verticalScale } from "./scale";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: horizontalScale(30),
    flex: 1,
  },
  addItemStyles: {
    width: horizontalScale(300),
    height: verticalScale(50),
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },
  titleStyles: {
    marginTop: verticalScale(20),
    color: "blue",
    fontWeight: "500",
  },
  itemOuterStyles: {
    height: verticalScale(40),
    width: horizontalScale(300),
    // backgroundColor: "pink",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: verticalScale(1),
    borderColor: "pink",
  },
  itemStyles: {
    alignSelf: "center",
  },
  flatListStyles: {
    marginTop: verticalScale(20),
    paddingBottom: verticalScale(40),
  },
  buttonOuterStyles: {
    width: horizontalScale(300),
    marginTop: verticalScale(10),
    height: verticalScale(50),
    justifyContent: "center",
    borderRadius: verticalScale(20),
    borderWidth: verticalScale(1),
    borderColor: "blue",
  },
  buttonStyles: {
    alignSelf: "center",
    color: "black",
    fontWeight: "700",
  },
  doneButtonOuterStyles: {
    backgroundColor: "pink",
    width: horizontalScale(50),
    height: verticalScale(30),
    justifyContent: "center",
    borderRadius: verticalScale(20),
  },
  doneButtonStyles: {
    color: "black",
    alignSelf: "center",
    fontWeight: "600",
  },
  innerView: {
    flexDirection: "row",
  },
  filterOuterStyles: {
    width: horizontalScale(300),
    marginTop: verticalScale(10),
    height: verticalScale(40),
    borderBottomWidth: verticalScale(1),
    borderColor: "grey",
    flexDirection: "row",
  },
  searchIconStyles: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  filterStyles: {
    marginLeft: horizontalScale(10),
  },
});
