import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserArrowUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserArrowUpRight: ForwardRefExoticComponent<BrowserArrowUpRightProps & RefAttributes<Svg>>;

export default BrowserArrowUpRight;
export { BrowserArrowUpRight };
