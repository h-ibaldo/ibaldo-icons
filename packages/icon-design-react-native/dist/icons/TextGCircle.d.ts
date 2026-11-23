import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextGCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextGCircle: ForwardRefExoticComponent<TextGCircleProps & RefAttributes<Svg>>;

export default TextGCircle;
export { TextGCircle };
