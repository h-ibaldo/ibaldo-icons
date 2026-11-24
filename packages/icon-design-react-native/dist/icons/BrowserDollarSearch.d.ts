import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserDollarSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserDollarSearch: ForwardRefExoticComponent<BrowserDollarSearchProps & RefAttributes<Svg>>;

export default BrowserDollarSearch;
export { BrowserDollarSearch };
