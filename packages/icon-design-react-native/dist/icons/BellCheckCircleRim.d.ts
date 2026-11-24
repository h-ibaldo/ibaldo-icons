import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellCheckCircleRimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellCheckCircleRim: ForwardRefExoticComponent<BellCheckCircleRimProps & RefAttributes<Svg>>;

export default BellCheckCircleRim;
export { BellCheckCircleRim };
