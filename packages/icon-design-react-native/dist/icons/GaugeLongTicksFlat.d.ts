import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeLongTicksFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeLongTicksFlat: ForwardRefExoticComponent<GaugeLongTicksFlatProps & RefAttributes<Svg>>;

export default GaugeLongTicksFlat;
export { GaugeLongTicksFlat };
