import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextBCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextBCircle: ForwardRefExoticComponent<TextBCircleProps & RefAttributes<Svg>>;

export default TextBCircle;
export { TextBCircle };
