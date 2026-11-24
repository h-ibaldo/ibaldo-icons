import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserMegaphoneBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserMegaphoneBare: ForwardRefExoticComponent<BrowserMegaphoneBareProps & RefAttributes<Svg>>;

export default BrowserMegaphoneBare;
export { BrowserMegaphoneBare };
