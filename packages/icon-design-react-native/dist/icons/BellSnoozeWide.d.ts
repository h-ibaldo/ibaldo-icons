import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellSnoozeWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellSnoozeWide: ForwardRefExoticComponent<BellSnoozeWideProps & RefAttributes<Svg>>;

export default BellSnoozeWide;
export { BellSnoozeWide };
