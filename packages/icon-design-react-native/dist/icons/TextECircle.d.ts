import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextECircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextECircle: ForwardRefExoticComponent<TextECircleProps & RefAttributes<Svg>>;

export default TextECircle;
export { TextECircle };
