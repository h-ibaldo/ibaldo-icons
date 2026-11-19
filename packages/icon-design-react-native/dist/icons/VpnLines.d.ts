import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VpnLinesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VpnLines: ForwardRefExoticComponent<VpnLinesProps & RefAttributes<Svg>>;

export default VpnLines;
export { VpnLines };
