import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BellRingLinesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BellRingLines: ForwardRefExoticComponent<BellRingLinesProps & RefAttributes<Svg>>;

export default BellRingLines;
export { BellRingLines };
