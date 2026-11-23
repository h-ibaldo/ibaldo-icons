import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextESquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextESquare: ForwardRefExoticComponent<TextESquareProps & RefAttributes<Svg>>;

export default TextESquare;
export { TextESquare };
