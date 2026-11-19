import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRepeatVerticalCompactProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRepeatVerticalCompact: ForwardRefExoticComponent<ArrowRepeatVerticalCompactProps & RefAttributes<Svg>>;

export default ArrowRepeatVerticalCompact;
export { ArrowRepeatVerticalCompact };
