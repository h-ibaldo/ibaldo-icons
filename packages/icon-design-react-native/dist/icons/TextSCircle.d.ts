import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextSCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextSCircle: ForwardRefExoticComponent<TextSCircleProps & RefAttributes<Svg>>;

export default TextSCircle;
export { TextSCircle };
