import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextACircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextACircle: ForwardRefExoticComponent<TextACircleProps & RefAttributes<Svg>>;

export default TextACircle;
export { TextACircle };
