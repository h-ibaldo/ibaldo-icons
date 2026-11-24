import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TextPSquareOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TextPSquareOff: ForwardRefExoticComponent<TextPSquareOffProps & RefAttributes<Svg>>;

export default TextPSquareOff;
export { TextPSquareOff };
