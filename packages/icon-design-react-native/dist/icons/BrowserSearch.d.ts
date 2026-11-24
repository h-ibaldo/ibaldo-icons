import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserSearchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserSearch: ForwardRefExoticComponent<BrowserSearchProps & RefAttributes<Svg>>;

export default BrowserSearch;
export { BrowserSearch };
