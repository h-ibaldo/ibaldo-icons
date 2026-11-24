import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HotspotSidesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HotspotSides: ForwardRefExoticComponent<HotspotSidesProps & RefAttributes<Svg>>;

export default HotspotSides;
export { HotspotSides };
