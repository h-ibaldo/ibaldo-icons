import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellDotWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellDotWide: ForwardRefExoticComponent<BellDotWideProps & RefAttributes<Svg>>;

export default BellDotWide;
export { BellDotWide };
