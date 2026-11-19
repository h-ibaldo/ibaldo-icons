import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HotspotStemLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HotspotStemLarge: ForwardRefExoticComponent<HotspotStemLargeProps & RefAttributes<Svg>>;

export default HotspotStemLarge;
export { HotspotStemLarge };
