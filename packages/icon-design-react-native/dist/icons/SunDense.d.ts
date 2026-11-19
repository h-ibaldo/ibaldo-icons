import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunDenseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunDense: ForwardRefExoticComponent<SunDenseProps & RefAttributes<Svg>>;

export default SunDense;
export { SunDense };
