import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TranslateSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TranslateSquare: ForwardRefExoticComponent<TranslateSquareProps & RefAttributes<Svg>>;

export default TranslateSquare;
export { TranslateSquare };
