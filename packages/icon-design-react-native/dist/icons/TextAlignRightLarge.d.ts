import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAlignRightLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAlignRightLarge: ForwardRefExoticComponent<TextAlignRightLargeProps & RefAttributes<Svg>>;

export default TextAlignRightLarge;
export { TextAlignRightLarge };
