import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchRockerOnProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchRockerOn: ForwardRefExoticComponent<SwitchRockerOnProps & RefAttributes<Svg>>;

export default SwitchRockerOn;
export { SwitchRockerOn };
