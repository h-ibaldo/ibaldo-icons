import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserShoeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserShoe: ForwardRefExoticComponent<BrowserShoeProps & RefAttributes<Svg>>;

export default BrowserShoe;
export { BrowserShoe };
