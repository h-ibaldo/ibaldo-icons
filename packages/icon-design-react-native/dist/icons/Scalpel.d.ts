import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScalpelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Scalpel: ForwardRefExoticComponent<ScalpelProps & RefAttributes<Svg>>;

export default Scalpel;
export { Scalpel };
