import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingDoorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingDoor: ForwardRefExoticComponent<BuildingDoorProps & RefAttributes<Svg>>;

export default BuildingDoor;
export { BuildingDoor };
