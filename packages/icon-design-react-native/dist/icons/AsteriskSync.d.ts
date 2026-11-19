import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AsteriskSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AsteriskSync: ForwardRefExoticComponent<AsteriskSyncProps & RefAttributes<Svg>>;

export default AsteriskSync;
export { AsteriskSync };
