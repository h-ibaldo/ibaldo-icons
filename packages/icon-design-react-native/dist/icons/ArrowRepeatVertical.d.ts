import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRepeatVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRepeatVertical: ForwardRefExoticComponent<ArrowRepeatVerticalProps & RefAttributes<Svg>>;

export default ArrowRepeatVertical;
export { ArrowRepeatVertical };
