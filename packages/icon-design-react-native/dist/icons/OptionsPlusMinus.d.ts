import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsPlusMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsPlusMinus: ForwardRefExoticComponent<OptionsPlusMinusProps & RefAttributes<Svg>>;

export default OptionsPlusMinus;
export { OptionsPlusMinus };
