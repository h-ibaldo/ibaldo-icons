import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchDialLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchDialLeft: ForwardRefExoticComponent<SwitchDialLeftProps & RefAttributes<Svg>>;

export default SwitchDialLeft;
export { SwitchDialLeft };
