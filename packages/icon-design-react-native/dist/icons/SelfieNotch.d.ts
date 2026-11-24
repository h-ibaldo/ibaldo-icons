import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SelfieNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SelfieNotch: ForwardRefExoticComponent<SelfieNotchProps & RefAttributes<Svg>>;

export default SelfieNotch;
export { SelfieNotch };
