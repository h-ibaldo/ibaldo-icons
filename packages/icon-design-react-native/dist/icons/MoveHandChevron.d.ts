import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MoveHandChevronProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const MoveHandChevron: ForwardRefExoticComponent<MoveHandChevronProps & RefAttributes<Svg>>;

export default MoveHandChevron;
export { MoveHandChevron };
