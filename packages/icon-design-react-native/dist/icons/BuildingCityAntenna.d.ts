import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingCityAntennaProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingCityAntenna: ForwardRefExoticComponent<BuildingCityAntennaProps & RefAttributes<Svg>>;

export default BuildingCityAntenna;
export { BuildingCityAntenna };
