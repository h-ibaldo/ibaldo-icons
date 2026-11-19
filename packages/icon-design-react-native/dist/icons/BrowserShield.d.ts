import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserShieldProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserShield: ForwardRefExoticComponent<BrowserShieldProps & RefAttributes<Svg>>;

export default BrowserShield;
export { BrowserShield };
