import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingAnnexSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingAnnexSlanted: ForwardRefExoticComponent<BuildingAnnexSlantedProps & RefAttributes<Svg>>;

export default BuildingAnnexSlanted;
export { BuildingAnnexSlanted };
