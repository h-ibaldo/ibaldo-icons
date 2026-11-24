import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAlignJustifyLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAlignJustifyLarge: ForwardRefExoticComponent<TextAlignJustifyLargeProps & RefAttributes<Svg>>;

export default TextAlignJustifyLarge;
export { TextAlignJustifyLarge };
