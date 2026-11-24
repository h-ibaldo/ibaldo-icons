import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WrenchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Wrench: ForwardRefExoticComponent<WrenchProps & RefAttributes<Svg>>;

export default Wrench;
export { Wrench };
