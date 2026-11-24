import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLockTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLockTall: ForwardRefExoticComponent<CloudLockTallProps & RefAttributes<Svg>>;

export default CloudLockTall;
export { CloudLockTall };
