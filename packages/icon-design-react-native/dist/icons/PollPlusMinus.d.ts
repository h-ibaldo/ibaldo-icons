import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollPlusMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollPlusMinus: ForwardRefExoticComponent<PollPlusMinusProps & RefAttributes<Svg>>;

export default PollPlusMinus;
export { PollPlusMinus };
