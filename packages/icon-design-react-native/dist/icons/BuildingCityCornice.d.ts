import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingCityCorniceProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingCityCornice: ForwardRefExoticComponent<BuildingCityCorniceProps & RefAttributes<Svg>>;

export default BuildingCityCornice;
export { BuildingCityCornice };
