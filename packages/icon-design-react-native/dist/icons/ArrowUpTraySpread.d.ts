import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpTraySpreadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpTraySpread: ForwardRefExoticComponent<ArrowUpTraySpreadProps & RefAttributes<Svg>>;

export default ArrowUpTraySpread;
export { ArrowUpTraySpread };
