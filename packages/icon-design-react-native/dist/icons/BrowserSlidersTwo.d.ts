import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserSlidersTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserSlidersTwo: ForwardRefExoticComponent<BrowserSlidersTwoProps & RefAttributes<Svg>>;

export default BrowserSlidersTwo;
export { BrowserSlidersTwo };
