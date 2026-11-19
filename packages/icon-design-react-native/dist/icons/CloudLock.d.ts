import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudLock: ForwardRefExoticComponent<CloudLockProps & RefAttributes<Svg>>;

export default CloudLock;
export { CloudLock };
