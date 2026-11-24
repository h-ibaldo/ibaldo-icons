import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingCityIsometricProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingCityIsometric: ForwardRefExoticComponent<BuildingCityIsometricProps & RefAttributes<Svg>>;

export default BuildingCityIsometric;
export { BuildingCityIsometric };
