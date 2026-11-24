import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SubscriptProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Subscript: ForwardRefExoticComponent<SubscriptProps & RefAttributes<Svg>>;

export default Subscript;
export { Subscript };
