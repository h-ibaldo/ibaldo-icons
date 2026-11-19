import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunShortDenseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunShortDense: ForwardRefExoticComponent<SunShortDenseProps & RefAttributes<Svg>>;

export default SunShortDense;
export { SunShortDense };
