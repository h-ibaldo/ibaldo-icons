import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlugProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Plug: ForwardRefExoticComponent<PlugProps & RefAttributes<Svg>>;

export default Plug;
export { Plug };
