import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAlignCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAlignCenter: ForwardRefExoticComponent<TextAlignCenterProps & RefAttributes<Svg>>;

export default TextAlignCenter;
export { TextAlignCenter };
