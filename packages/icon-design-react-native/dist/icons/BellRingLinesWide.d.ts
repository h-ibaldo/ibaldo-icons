import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellRingLinesWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellRingLinesWide: ForwardRefExoticComponent<BellRingLinesWideProps & RefAttributes<Svg>>;

export default BellRingLinesWide;
export { BellRingLinesWide };
