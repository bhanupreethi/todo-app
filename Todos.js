import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  useDeleteTodosMutation,
  useGetTodosQuery,
  usePostTodosMutation,
  useUpdateTodosMutation,
} from "./api";
import { SvgXml } from "react-native-svg";
import { VectorIcons } from "./VectorIcons";
import { styles } from "./styles";
import { verticalScale } from "./scale";

export const Todos = () => {
  const [addItem, setAddItem] = useState("");
  const [filterTodo, setFilterTodo] = useState("");

  // api's declaration
  const { isLoading: isGetLoading, data, refetch } = useGetTodosQuery();
  const [
    postTodos,
    {
      isLoading: isPostLoading,
      isError: isPostErr,
      isSuccess: isPostSuccess,
      error: postErr,
    },
  ] = usePostTodosMutation();

  const [
    updateTodos,
    {
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      isError: isUpdateErr,
      error: updateErr,
    },
  ] = useUpdateTodosMutation();
  const [
    deleteTodos,
    {
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      isError: isDeleteErr,
      error: deleteErr,
    },
  ] = useDeleteTodosMutation();

  // It will handle the all api success/failure cases
  useEffect(() => {
    // if any mutation succeed, we are refreshing the data and making the variables to the inital state.
    if (isPostSuccess || isUpdateSuccess || isDeleteSuccess) {
      refetch();
      setAddItem("");
    }

    // if post api fails
    if (isPostErr) {
      Alert.alert(postErr?.error?.message);
    }

    // if update api fails
    if (isUpdateErr) {
      Alert.alert(updateErr?.error?.message);
    }

    // if delete api fails
    if (isDeleteErr) {
      Alert.alert(deleteErr?.error?.message);
    }
  }, [isGetLoading, isPostLoading, isUpdateLoading, isDeleteLoading]);

  // Here, we are calling the update api to make the status of the todo item completed.
  const updateItemFunc = (id) => {
    const params = {
      data: {
        done: true,
      },
    };
    updateTodos({ id, data: params });
  };

  // calling the delete api
  const deleteItemFunc = (id) => {
    deleteTodos(id);
  };

  // adding new item into the todo list
  const addNewItemFunc = () => {
    if (addItem.length === 0) {
      Alert.alert("Enter Something..");
    } else {
      const params = {
        data: {
          desciption: addItem,
          email: "testing@gmail.com",
        },
      };
      postTodos(params);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemOuterStyles}>
        <Text
          style={[
            styles.itemStyles,
            item.attributes.done && { color: "#71717A" },
          ]}
        >
          {item.attributes.desciption}
        </Text>
        <View style={styles.innerView}>
          {/* It will be visible only if that partcular todo is not yet done. */}
          {!item.attributes.done && (
            <TouchableOpacity
              style={styles.doneButtonOuterStyles}
              onPress={() => updateItemFunc(item.id)}
            >
              <Text style={styles.doneButtonStyles}>Done</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => deleteItemFunc(item.id)}>
            <SvgXml
              xml={VectorIcons.deleteIcon}
              style={{ marginHorizontal: horizontalScale(5) }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* it will show loading if any api calling is happening */}
      {isGetLoading || isPostLoading || isUpdateLoading || isDeleteLoading ? (
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            flex: 1,
            fontWeight: "800",
          }}
        >
          {" "}
          Loading...
        </Text>
      ) : (
        <>
          <Text style={styles.titleStyles}>Add New Item:</Text>
          <TextInput
            placeholder="Enter Anything..."
            value={addItem}
            onChangeText={(text) => setAddItem(text)}
            style={styles.addItemStyles}
          />
          <TouchableOpacity
            style={styles.buttonOuterStyles}
            onPress={addNewItemFunc}
          >
            <Text style={styles.buttonStyles}>CONTINUE</Text>
          </TouchableOpacity>

          {/* filter */}
          <View style={styles.filterOuterStyles}>
            <SvgXml
              xml={VectorIcons.searchIcon}
              style={styles.searchIconStyles}
            />
            <TextInput
              value={filterTodo}
              onChangeText={(text) => setFilterTodo(text)}
              placeholder={"filter"}
              style={styles.filterStyles}
            />
          </View>

          {/* flat list to display todo list */}
          <FlatList
            data={
              filterTodo.length > 0
                ? data?.filter(
                    (item) =>
                      JSON.stringify(item)
                        .toLowerCase()
                        .indexOf(filterTodo.toLowerCase()) !== -1
                  )
                : data
            }
            renderItem={renderItem}
            ItemSeparatorComponent={
              <View style={{ margin: verticalScale(5) }} />
            }
            style={styles.flatListStyles}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </SafeAreaView>
  );
};
