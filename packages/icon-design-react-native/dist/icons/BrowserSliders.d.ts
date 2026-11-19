import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserSlidersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserSliders: ForwardRefExoticComponent<BrowserSlidersProps & RefAttributes<Svg>>;

export default BrowserSliders;
export { BrowserSliders };
