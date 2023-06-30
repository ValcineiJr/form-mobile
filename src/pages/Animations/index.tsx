import React, { useState } from "react";

import { View, Text } from "react-native";

import { InputTag } from "../../components/InputTag";
import { ButtonTag } from "../../components/ButtonTag";

import { styles } from "./styles";
import { Tags } from "../../components/Tags";

const Animations: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(tagDeleted: string) {
    setTags((prevState) => prevState.filter((tag) => tag !== tagDeleted));
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <InputTag
          placeholder="Nova tag"
          onChangeText={setNewTag}
          value={newTag}
        />
        <ButtonTag onPress={handleAddTag} />
      </View>

      <Text style={styles.title}>Tags</Text>

      <Tags data={tags} onRemove={handleRemoveTag} />
    </View>
  );
};

export default Animations;
