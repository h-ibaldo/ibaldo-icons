import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PlugThickProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PlugThick: ForwardRefExoticComponent<PlugThickProps & RefAttributes<Svg>>;

export default PlugThick;
export { PlugThick };
