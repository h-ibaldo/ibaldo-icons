import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopStoreFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopStoreFlat: ForwardRefExoticComponent<LaptopStoreFlatProps & RefAttributes<Svg>>;

export default LaptopStoreFlat;
export { LaptopStoreFlat };
