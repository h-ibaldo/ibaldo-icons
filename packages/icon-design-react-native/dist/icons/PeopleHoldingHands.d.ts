import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PeopleHoldingHandsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PeopleHoldingHands: ForwardRefExoticComponent<PeopleHoldingHandsProps & RefAttributes<Svg>>;

export default PeopleHoldingHands;
export { PeopleHoldingHands };
