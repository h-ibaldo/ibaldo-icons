import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeLongDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeLongDashed: ForwardRefExoticComponent<GaugeLongDashedProps & RefAttributes<Svg>>;

export default GaugeLongDashed;
export { GaugeLongDashed };
