import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellClockWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellClockWide: ForwardRefExoticComponent<BellClockWideProps & RefAttributes<Svg>>;

export default BellClockWide;
export { BellClockWide };
