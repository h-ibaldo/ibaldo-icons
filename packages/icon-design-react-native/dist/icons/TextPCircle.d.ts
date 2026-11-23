import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextPCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextPCircle: ForwardRefExoticComponent<TextPCircleProps & RefAttributes<Svg>>;

export default TextPCircle;
export { TextPCircle };
