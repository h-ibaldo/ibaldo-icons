import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LaptopWrenchFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LaptopWrenchFlat: ForwardRefExoticComponent<LaptopWrenchFlatProps & RefAttributes<Svg>>;

export default LaptopWrenchFlat;
export { LaptopWrenchFlat };
