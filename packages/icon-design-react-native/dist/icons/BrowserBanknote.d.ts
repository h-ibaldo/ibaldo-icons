import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserBanknoteProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserBanknote: ForwardRefExoticComponent<BrowserBanknoteProps & RefAttributes<Svg>>;

export default BrowserBanknote;
export { BrowserBanknote };
