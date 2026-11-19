import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BuildingDoorWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BuildingDoorWide: ForwardRefExoticComponent<BuildingDoorWideProps & RefAttributes<Svg>>;

export default BuildingDoorWide;
export { BuildingDoorWide };
