import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchRockerOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchRockerOff: ForwardRefExoticComponent<SwitchRockerOffProps & RefAttributes<Svg>>;

export default SwitchRockerOff;
export { SwitchRockerOff };
