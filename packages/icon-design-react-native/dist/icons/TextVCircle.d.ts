import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextVCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextVCircle: ForwardRefExoticComponent<TextVCircleProps & RefAttributes<Svg>>;

export default TextVCircle;
export { TextVCircle };
