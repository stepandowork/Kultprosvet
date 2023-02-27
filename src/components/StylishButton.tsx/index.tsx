import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { TransparentColors } from '../../theme/colors'

const StylishButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
      {props.children}
    </TouchableOpacity>
  )
}

export default StylishButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: TransparentColors.card,
        borderColor: TransparentColors.border,
    }
})