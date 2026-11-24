import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchLeverProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchLever: ForwardRefExoticComponent<SwitchLeverProps & RefAttributes<Svg>>;

export default SwitchLever;
export { SwitchLever };
