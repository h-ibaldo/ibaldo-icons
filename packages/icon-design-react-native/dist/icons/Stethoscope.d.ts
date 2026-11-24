import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StethoscopeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Stethoscope: ForwardRefExoticComponent<StethoscopeProps & RefAttributes<Svg>>;

export default Stethoscope;
export { Stethoscope };
