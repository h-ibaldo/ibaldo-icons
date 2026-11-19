import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingAnnexDoorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingAnnexDoor: ForwardRefExoticComponent<BuildingAnnexDoorProps & RefAttributes<Svg>>;

export default BuildingAnnexDoor;
export { BuildingAnnexDoor };
