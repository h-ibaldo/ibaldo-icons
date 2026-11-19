import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingAnnexGridProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingAnnexGrid: ForwardRefExoticComponent<BuildingAnnexGridProps & RefAttributes<Svg>>;

export default BuildingAnnexGrid;
export { BuildingAnnexGrid };
