import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorSquareArrowOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorSquareArrowOut: ForwardRefExoticComponent<DoorSquareArrowOutProps & RefAttributes<Svg>>;

export default DoorSquareArrowOut;
export { DoorSquareArrowOut };
