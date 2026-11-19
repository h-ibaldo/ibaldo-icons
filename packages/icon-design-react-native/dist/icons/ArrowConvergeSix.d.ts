import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeSixProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeSix: ForwardRefExoticComponent<ArrowConvergeSixProps & RefAttributes<Svg>>;

export default ArrowConvergeSix;
export { ArrowConvergeSix };
