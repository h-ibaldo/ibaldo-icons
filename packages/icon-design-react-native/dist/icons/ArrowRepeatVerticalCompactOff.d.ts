import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRepeatVerticalCompactOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRepeatVerticalCompactOff: ForwardRefExoticComponent<ArrowRepeatVerticalCompactOffProps & RefAttributes<Svg>>;

export default ArrowRepeatVerticalCompactOff;
export { ArrowRepeatVerticalCompactOff };
