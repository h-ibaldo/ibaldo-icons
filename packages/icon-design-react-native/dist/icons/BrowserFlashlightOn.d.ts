import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserFlashlightOnProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserFlashlightOn: ForwardRefExoticComponent<BrowserFlashlightOnProps & RefAttributes<Svg>>;

export default BrowserFlashlightOn;
export { BrowserFlashlightOn };
