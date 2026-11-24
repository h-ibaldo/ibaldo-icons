import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserArrowUp: ForwardRefExoticComponent<BrowserArrowUpProps & RefAttributes<Svg>>;

export default BrowserArrowUp;
export { BrowserArrowUp };
