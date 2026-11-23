import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextYCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextYCircle: ForwardRefExoticComponent<TextYCircleProps & RefAttributes<Svg>>;

export default TextYCircle;
export { TextYCircle };
