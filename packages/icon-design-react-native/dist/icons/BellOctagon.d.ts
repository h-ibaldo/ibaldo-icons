import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellOctagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellOctagon: ForwardRefExoticComponent<BellOctagonProps & RefAttributes<Svg>>;

export default BellOctagon;
export { BellOctagon };
