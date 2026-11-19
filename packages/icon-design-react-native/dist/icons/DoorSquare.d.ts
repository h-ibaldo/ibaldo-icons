import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorSquare: ForwardRefExoticComponent<DoorSquareProps & RefAttributes<Svg>>;

export default DoorSquare;
export { DoorSquare };
