import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchDialOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchDialOff: ForwardRefExoticComponent<SwitchDialOffProps & RefAttributes<Svg>>;

export default SwitchDialOff;
export { SwitchDialOff };
