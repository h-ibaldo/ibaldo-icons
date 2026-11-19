import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SwitchLeverCupStemProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SwitchLeverCupStem: ForwardRefExoticComponent<SwitchLeverCupStemProps & RefAttributes<Svg>>;

export default SwitchLeverCupStem;
export { SwitchLeverCupStem };
