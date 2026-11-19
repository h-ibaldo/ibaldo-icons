import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingSlanted: ForwardRefExoticComponent<BuildingSlantedProps & RefAttributes<Svg>>;

export default BuildingSlanted;
export { BuildingSlanted };
