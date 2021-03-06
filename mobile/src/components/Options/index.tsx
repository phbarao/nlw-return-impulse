import React from 'react';
import { Text, View } from 'react-native';
import { Copywright } from '../Copywright';
import { Option } from '../Option';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';
import { FeedbackType } from '../Widget';

interface Props {
  onFeedbackTypeChange: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChange }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChange(key as FeedbackType)}
          />
        ))}
      </View>

      <Copywright />
    </View>
  );
}
