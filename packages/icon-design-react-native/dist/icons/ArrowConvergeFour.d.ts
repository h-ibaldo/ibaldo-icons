import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeFourProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeFour: ForwardRefExoticComponent<ArrowConvergeFourProps & RefAttributes<Svg>>;

export default ArrowConvergeFour;
export { ArrowConvergeFour };
