import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChecklistSquareFilledTopProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChecklistSquareFilledTop: ForwardRefExoticComponent<ChecklistSquareFilledTopProps & RefAttributes<Svg>>;

export default ChecklistSquareFilledTop;
export { ChecklistSquareFilledTop };
