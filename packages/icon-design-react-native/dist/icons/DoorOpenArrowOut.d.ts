import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorOpenArrowOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorOpenArrowOut: ForwardRefExoticComponent<DoorOpenArrowOutProps & RefAttributes<Svg>>;

export default DoorOpenArrowOut;
export { DoorOpenArrowOut };
