import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoltProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Bolt: ForwardRefExoticComponent<BoltProps & RefAttributes<Svg>>;

export default Bolt;
export { Bolt };
