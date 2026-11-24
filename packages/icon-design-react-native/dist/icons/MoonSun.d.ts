import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MoonSunProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MoonSun: ForwardRefExoticComponent<MoonSunProps & RefAttributes<Svg>>;

export default MoonSun;
export { MoonSun };
