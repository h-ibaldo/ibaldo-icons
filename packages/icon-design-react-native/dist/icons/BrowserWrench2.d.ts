import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserWrench2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserWrench2: ForwardRefExoticComponent<BrowserWrench2Props & RefAttributes<Svg>>;

export default BrowserWrench2;
export { BrowserWrench2 };
