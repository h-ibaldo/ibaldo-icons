import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserDollarSearchDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserDollarSearchDots: ForwardRefExoticComponent<BrowserDollarSearchDotsProps & RefAttributes<Svg>>;

export default BrowserDollarSearchDots;
export { BrowserDollarSearchDots };
