import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SirenFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SirenFlat: ForwardRefExoticComponent<SirenFlatProps & RefAttributes<Svg>>;

export default SirenFlat;
export { SirenFlat };
