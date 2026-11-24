import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellTiltedWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellTiltedWide: ForwardRefExoticComponent<BellTiltedWideProps & RefAttributes<Svg>>;

export default BellTiltedWide;
export { BellTiltedWide };
