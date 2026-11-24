import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextMCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextMCircle: ForwardRefExoticComponent<TextMCircleProps & RefAttributes<Svg>>;

export default TextMCircle;
export { TextMCircle };
