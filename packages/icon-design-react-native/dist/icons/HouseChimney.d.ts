import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HouseChimneyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HouseChimney: ForwardRefExoticComponent<HouseChimneyProps & RefAttributes<Svg>>;

export default HouseChimney;
export { HouseChimney };
