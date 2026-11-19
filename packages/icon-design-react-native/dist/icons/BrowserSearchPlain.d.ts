import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserSearchPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserSearchPlain: ForwardRefExoticComponent<BrowserSearchPlainProps & RefAttributes<Svg>>;

export default BrowserSearchPlain;
export { BrowserSearchPlain };
