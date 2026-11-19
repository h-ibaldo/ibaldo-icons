import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HotspotSidesStemProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HotspotSidesStem: ForwardRefExoticComponent<HotspotSidesStemProps & RefAttributes<Svg>>;

export default HotspotSidesStem;
export { HotspotSidesStem };
