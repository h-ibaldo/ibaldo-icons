import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingAnnexProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingAnnex: ForwardRefExoticComponent<BuildingAnnexProps & RefAttributes<Svg>>;

export default BuildingAnnex;
export { BuildingAnnex };
