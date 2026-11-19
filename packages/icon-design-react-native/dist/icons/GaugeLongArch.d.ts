import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeLongArchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeLongArch: ForwardRefExoticComponent<GaugeLongArchProps & RefAttributes<Svg>>;

export default GaugeLongArch;
export { GaugeLongArch };
