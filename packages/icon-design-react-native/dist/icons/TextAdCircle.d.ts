import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextAdCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextAdCircle: ForwardRefExoticComponent<TextAdCircleProps & RefAttributes<Svg>>;

export default TextAdCircle;
export { TextAdCircle };
