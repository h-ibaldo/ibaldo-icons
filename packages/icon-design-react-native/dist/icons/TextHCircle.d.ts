import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextHCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextHCircle: ForwardRefExoticComponent<TextHCircleProps & RefAttributes<Svg>>;

export default TextHCircle;
export { TextHCircle };
