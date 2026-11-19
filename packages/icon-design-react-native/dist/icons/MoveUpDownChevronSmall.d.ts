import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MoveUpDownChevronSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MoveUpDownChevronSmall: ForwardRefExoticComponent<MoveUpDownChevronSmallProps & RefAttributes<Svg>>;

export default MoveUpDownChevronSmall;
export { MoveUpDownChevronSmall };
