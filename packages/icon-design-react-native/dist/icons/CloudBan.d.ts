import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudBanProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudBan: ForwardRefExoticComponent<CloudBanProps & RefAttributes<Svg>>;

export default CloudBan;
export { CloudBan };
