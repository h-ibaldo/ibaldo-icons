import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface EqualsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Equals: ForwardRefExoticComponent<EqualsProps & RefAttributes<Svg>>;

export default Equals;
export { Equals };
