import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TranslateSquareStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TranslateSquareStack: ForwardRefExoticComponent<TranslateSquareStackProps & RefAttributes<Svg>>;

export default TranslateSquareStack;
export { TranslateSquareStack };
