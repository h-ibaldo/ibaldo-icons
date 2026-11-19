import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellRingLinesDashProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellRingLinesDash: ForwardRefExoticComponent<BellRingLinesDashProps & RefAttributes<Svg>>;

export default BellRingLinesDash;
export { BellRingLinesDash };
