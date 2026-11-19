import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAlignCenterLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAlignCenterLarge: ForwardRefExoticComponent<TextAlignCenterLargeProps & RefAttributes<Svg>>;

export default TextAlignCenterLarge;
export { TextAlignCenterLarge };
