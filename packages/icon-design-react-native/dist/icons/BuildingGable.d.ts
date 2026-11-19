import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingGableProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingGable: ForwardRefExoticComponent<BuildingGableProps & RefAttributes<Svg>>;

export default BuildingGable;
export { BuildingGable };
