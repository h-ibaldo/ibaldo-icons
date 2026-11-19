import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HouseDoorChimneyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HouseDoorChimney: ForwardRefExoticComponent<HouseDoorChimneyProps & RefAttributes<Svg>>;

export default HouseDoorChimney;
export { HouseDoorChimney };
