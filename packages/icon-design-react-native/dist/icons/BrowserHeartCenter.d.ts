import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserHeartCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserHeartCenter: ForwardRefExoticComponent<BrowserHeartCenterProps & RefAttributes<Svg>>;

export default BrowserHeartCenter;
export { BrowserHeartCenter };
