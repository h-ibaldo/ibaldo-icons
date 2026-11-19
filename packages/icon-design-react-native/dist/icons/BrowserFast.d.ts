import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserFastProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserFast: ForwardRefExoticComponent<BrowserFastProps & RefAttributes<Svg>>;

export default BrowserFast;
export { BrowserFast };
