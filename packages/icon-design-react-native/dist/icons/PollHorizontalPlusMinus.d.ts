import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PollHorizontalPlusMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PollHorizontalPlusMinus: ForwardRefExoticComponent<PollHorizontalPlusMinusProps & RefAttributes<Svg>>;

export default PollHorizontalPlusMinus;
export { PollHorizontalPlusMinus };
