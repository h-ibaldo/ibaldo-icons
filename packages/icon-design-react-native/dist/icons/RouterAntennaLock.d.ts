import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RouterAntennaLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RouterAntennaLock: ForwardRefExoticComponent<RouterAntennaLockProps & RefAttributes<Svg>>;

export default RouterAntennaLock;
export { RouterAntennaLock };
