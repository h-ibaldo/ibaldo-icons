import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRepeatTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRepeatTall: ForwardRefExoticComponent<ArrowRepeatTallProps & RefAttributes<Svg>>;

export default ArrowRepeatTall;
export { ArrowRepeatTall };
