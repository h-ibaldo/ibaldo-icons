import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextFCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextFCircle: ForwardRefExoticComponent<TextFCircleProps & RefAttributes<Svg>>;

export default TextFCircle;
export { TextFCircle };
