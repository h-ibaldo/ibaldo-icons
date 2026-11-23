import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextRCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextRCircle: ForwardRefExoticComponent<TextRCircleProps & RefAttributes<Svg>>;

export default TextRCircle;
export { TextRCircle };
