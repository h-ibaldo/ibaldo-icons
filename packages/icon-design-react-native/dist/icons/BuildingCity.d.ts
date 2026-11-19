import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingCityProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingCity: ForwardRefExoticComponent<BuildingCityProps & RefAttributes<Svg>>;

export default BuildingCity;
export { BuildingCity };
