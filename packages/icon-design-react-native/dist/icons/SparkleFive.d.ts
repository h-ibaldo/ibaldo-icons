import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SparkleFiveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SparkleFive: ForwardRefExoticComponent<SparkleFiveProps & RefAttributes<Svg>>;

export default SparkleFive;
export { SparkleFive };
