import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextZCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextZCircle: ForwardRefExoticComponent<TextZCircleProps & RefAttributes<Svg>>;

export default TextZCircle;
export { TextZCircle };
