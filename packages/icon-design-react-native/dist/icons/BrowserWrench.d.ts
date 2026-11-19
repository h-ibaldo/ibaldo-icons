import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserWrenchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserWrench: ForwardRefExoticComponent<BrowserWrenchProps & RefAttributes<Svg>>;

export default BrowserWrench;
export { BrowserWrench };
