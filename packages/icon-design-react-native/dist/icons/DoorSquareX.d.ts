import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorSquareXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorSquareX: ForwardRefExoticComponent<DoorSquareXProps & RefAttributes<Svg>>;

export default DoorSquareX;
export { DoorSquareX };
