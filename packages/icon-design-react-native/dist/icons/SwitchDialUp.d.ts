import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchDialUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchDialUp: ForwardRefExoticComponent<SwitchDialUpProps & RefAttributes<Svg>>;

export default SwitchDialUp;
export { SwitchDialUp };
