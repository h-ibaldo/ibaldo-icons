import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextZProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextZ: ForwardRefExoticComponent<TextZProps & RefAttributes<Svg>>;

export default TextZ;
export { TextZ };
