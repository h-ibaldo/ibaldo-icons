import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HotspotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Hotspot: ForwardRefExoticComponent<HotspotProps & RefAttributes<Svg>>;

export default Hotspot;
export { Hotspot };
