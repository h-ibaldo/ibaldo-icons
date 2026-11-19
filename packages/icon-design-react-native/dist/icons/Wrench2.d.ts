import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Wrench2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Wrench2: ForwardRefExoticComponent<Wrench2Props & RefAttributes<Svg>>;

export default Wrench2;
export { Wrench2 };
