import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchLeverCupProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchLeverCup: ForwardRefExoticComponent<SwitchLeverCupProps & RefAttributes<Svg>>;

export default SwitchLeverCup;
export { SwitchLeverCup };
