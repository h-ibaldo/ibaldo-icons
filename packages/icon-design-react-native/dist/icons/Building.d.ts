import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Building: ForwardRefExoticComponent<BuildingProps & RefAttributes<Svg>>;

export default Building;
export { Building };
