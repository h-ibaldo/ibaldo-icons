import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAlignLeftLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAlignLeftLarge: ForwardRefExoticComponent<TextAlignLeftLargeProps & RefAttributes<Svg>>;

export default TextAlignLeftLarge;
export { TextAlignLeftLarge };
