import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorOpenArrowInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorOpenArrowIn: ForwardRefExoticComponent<DoorOpenArrowInProps & RefAttributes<Svg>>;

export default DoorOpenArrowIn;
export { DoorOpenArrowIn };
