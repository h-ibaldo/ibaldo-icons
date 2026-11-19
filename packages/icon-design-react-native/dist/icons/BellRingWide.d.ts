import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellRingWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellRingWide: ForwardRefExoticComponent<BellRingWideProps & RefAttributes<Svg>>;

export default BellRingWide;
export { BellRingWide };
