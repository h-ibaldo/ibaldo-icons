import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserBanBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserBanBare: ForwardRefExoticComponent<BrowserBanBareProps & RefAttributes<Svg>>;

export default BrowserBanBare;
export { BrowserBanBare };
