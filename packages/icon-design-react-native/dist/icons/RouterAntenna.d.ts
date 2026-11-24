import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RouterAntennaProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RouterAntenna: ForwardRefExoticComponent<RouterAntennaProps & RefAttributes<Svg>>;

export default RouterAntenna;
export { RouterAntenna };
