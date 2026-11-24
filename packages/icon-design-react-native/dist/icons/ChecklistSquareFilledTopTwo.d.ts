import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistSquareFilledTopTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareFilledTopTwo: ForwardRefExoticComponent<ChecklistSquareFilledTopTwoProps & RefAttributes<Svg>>;

export default ChecklistSquareFilledTopTwo;
export { ChecklistSquareFilledTopTwo };
