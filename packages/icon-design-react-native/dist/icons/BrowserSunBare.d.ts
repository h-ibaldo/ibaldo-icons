import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserSunBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserSunBare: ForwardRefExoticComponent<BrowserSunBareProps & RefAttributes<Svg>>;

export default BrowserSunBare;
export { BrowserSunBare };
