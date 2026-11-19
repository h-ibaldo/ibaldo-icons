import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudUnlockTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudUnlockTall: ForwardRefExoticComponent<CloudUnlockTallProps & RefAttributes<Svg>>;

export default CloudUnlockTall;
export { CloudUnlockTall };
