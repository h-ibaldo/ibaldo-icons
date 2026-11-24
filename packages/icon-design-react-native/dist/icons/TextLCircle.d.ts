import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextLCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextLCircle: ForwardRefExoticComponent<TextLCircleProps & RefAttributes<Svg>>;

export default TextLCircle;
export { TextLCircle };
