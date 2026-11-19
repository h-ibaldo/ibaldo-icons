import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeLong: ForwardRefExoticComponent<GaugeLongProps & RefAttributes<Svg>>;

export default GaugeLong;
export { GaugeLong };
