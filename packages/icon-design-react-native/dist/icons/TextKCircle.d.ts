import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextKCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextKCircle: ForwardRefExoticComponent<TextKCircleProps & RefAttributes<Svg>>;

export default TextKCircle;
export { TextKCircle };
