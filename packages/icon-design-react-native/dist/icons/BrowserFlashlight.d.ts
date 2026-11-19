import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserFlashlightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserFlashlight: ForwardRefExoticComponent<BrowserFlashlightProps & RefAttributes<Svg>>;

export default BrowserFlashlight;
export { BrowserFlashlight };
