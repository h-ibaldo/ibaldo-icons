import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchDialRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchDialRight: ForwardRefExoticComponent<SwitchDialRightProps & RefAttributes<Svg>>;

export default SwitchDialRight;
export { SwitchDialRight };
