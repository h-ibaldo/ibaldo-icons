import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserHandbagProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserHandbag: ForwardRefExoticComponent<BrowserHandbagProps & RefAttributes<Svg>>;

export default BrowserHandbag;
export { BrowserHandbag };
