import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextJCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextJCircle: ForwardRefExoticComponent<TextJCircleProps & RefAttributes<Svg>>;

export default TextJCircle;
export { TextJCircle };
