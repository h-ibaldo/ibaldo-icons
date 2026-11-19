import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtSpiralProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtSpiral: ForwardRefExoticComponent<AtSpiralProps & RefAttributes<Svg>>;

export default AtSpiral;
export { AtSpiral };
