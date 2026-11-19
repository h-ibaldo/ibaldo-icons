import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUp: ForwardRefExoticComponent<ArrowUpProps & RefAttributes<Svg>>;

export default ArrowUp;
export { ArrowUp };
