import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ApertureProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Aperture: ForwardRefExoticComponent<ApertureProps & RefAttributes<Svg>>;

export default Aperture;
export { Aperture };
