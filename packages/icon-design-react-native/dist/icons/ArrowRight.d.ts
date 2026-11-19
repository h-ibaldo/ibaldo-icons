import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRight: ForwardRefExoticComponent<ArrowRightProps & RefAttributes<Svg>>;

export default ArrowRight;
export { ArrowRight };
