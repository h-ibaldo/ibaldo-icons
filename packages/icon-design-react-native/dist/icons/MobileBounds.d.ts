import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MobileBoundsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MobileBounds: ForwardRefExoticComponent<MobileBoundsProps & RefAttributes<Svg>>;

export default MobileBounds;
export { MobileBounds };
