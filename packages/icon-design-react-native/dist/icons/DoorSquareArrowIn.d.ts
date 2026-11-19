import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorSquareArrowInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorSquareArrowIn: ForwardRefExoticComponent<DoorSquareArrowInProps & RefAttributes<Svg>>;

export default DoorSquareArrowIn;
export { DoorSquareArrowIn };
