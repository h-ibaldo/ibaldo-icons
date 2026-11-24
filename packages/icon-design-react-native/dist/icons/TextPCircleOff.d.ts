import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextPCircleOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextPCircleOff: ForwardRefExoticComponent<TextPCircleOffProps & RefAttributes<Svg>>;

export default TextPCircleOff;
export { TextPCircleOff };
