import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AirplayTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AirplayTall: ForwardRefExoticComponent<AirplayTallProps & RefAttributes<Svg>>;

export default AirplayTall;
export { AirplayTall };
