import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingIsometricProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingIsometric: ForwardRefExoticComponent<BuildingIsometricProps & RefAttributes<Svg>>;

export default BuildingIsometric;
export { BuildingIsometric };
