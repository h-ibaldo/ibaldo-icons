import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunSpikyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunSpiky: ForwardRefExoticComponent<SunSpikyProps & RefAttributes<Svg>>;

export default SunSpiky;
export { SunSpiky };
