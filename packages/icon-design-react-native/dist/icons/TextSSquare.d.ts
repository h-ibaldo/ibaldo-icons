import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextSSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextSSquare: ForwardRefExoticComponent<TextSSquareProps & RefAttributes<Svg>>;

export default TextSSquare;
export { TextSSquare };
