import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PeopleHoldingHandsSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PeopleHoldingHandsSlim: ForwardRefExoticComponent<PeopleHoldingHandsSlimProps & RefAttributes<Svg>>;

export default PeopleHoldingHandsSlim;
export { PeopleHoldingHandsSlim };
