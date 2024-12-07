import React from 'react';
import {Pressable, StatusBar, View, Text} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BlurView} from '@react-native-community/blur';
import {colors} from '../../shared/styles/colors';
import {styles} from './HeaderNavigation.styles';
import ArrowLeft from '@/assets/icons/arrow_left.svg';

export const HeaderNavigation = (props: NativeStackHeaderProps) => {
  const {
    navigation,
    options: {headerTitle, headerRight, freezeOnBlur, headerBackVisible = true},
  } = props;

  const enableBlur = freezeOnBlur !== undefined ? freezeOnBlur : false;

  const renderHeaderRight = () => {
    if (headerRight) {
      return headerRight({
        canGoBack: false,
      });
    }
    return null;
  };

  const getBlur = () => {
    if (enableBlur) {
      return (
        <BlurView
          style={styles.blur}
          blurType="light"
          blurAmount={1}
          reducedTransparencyFallbackColor="white"
        />
      );
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
        animated
      />
      <View style={styles.headerContainer}>
        <View style={styles.contentLef}>
          {headerBackVisible && (
            <Pressable
              onPress={() => {
                navigation.canGoBack() && navigation.goBack();
              }}>
              <ArrowLeft
                width={24}
                height={24}
                testID={'backButtonTopNavigator'}
              />
            </Pressable>
          )}
          <Text style={styles.titleContent}>
            {typeof headerTitle === 'string'
              ? headerTitle
              : typeof headerTitle === 'function'
              ? headerTitle({children: '', tintColor: ''})
              : ''}
          </Text>
        </View>
        <View style={styles.contentRight}>{renderHeaderRight()}</View>
      </View>
      {getBlur()}
    </SafeAreaView>
  );
};
