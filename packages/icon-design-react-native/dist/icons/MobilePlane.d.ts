import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobilePlaneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobilePlane: ForwardRefExoticComponent<MobilePlaneProps & RefAttributes<Svg>>;

export default MobilePlane;
export { MobilePlane };
