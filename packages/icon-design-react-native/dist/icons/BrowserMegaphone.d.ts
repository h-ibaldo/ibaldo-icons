import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserMegaphoneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserMegaphone: ForwardRefExoticComponent<BrowserMegaphoneProps & RefAttributes<Svg>>;

export default BrowserMegaphone;
export { BrowserMegaphone };
