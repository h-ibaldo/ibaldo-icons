import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextICircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextICircle: ForwardRefExoticComponent<TextICircleProps & RefAttributes<Svg>>;

export default TextICircle;
export { TextICircle };
