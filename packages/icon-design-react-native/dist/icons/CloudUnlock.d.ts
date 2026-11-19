import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUnlockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUnlock: ForwardRefExoticComponent<CloudUnlockProps & RefAttributes<Svg>>;

export default CloudUnlock;
export { CloudUnlock };
