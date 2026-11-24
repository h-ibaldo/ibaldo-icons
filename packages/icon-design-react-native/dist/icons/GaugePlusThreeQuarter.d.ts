import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugePlusThreeQuarterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugePlusThreeQuarter: ForwardRefExoticComponent<GaugePlusThreeQuarterProps & RefAttributes<Svg>>;

export default GaugePlusThreeQuarter;
export { GaugePlusThreeQuarter };
