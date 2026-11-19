import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MoveUpDownChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MoveUpDownChevron: ForwardRefExoticComponent<MoveUpDownChevronProps & RefAttributes<Svg>>;

export default MoveUpDownChevron;
export { MoveUpDownChevron };
