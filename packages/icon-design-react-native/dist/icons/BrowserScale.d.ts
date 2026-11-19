import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserScaleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserScale: ForwardRefExoticComponent<BrowserScaleProps & RefAttributes<Svg>>;

export default BrowserScale;
export { BrowserScale };
