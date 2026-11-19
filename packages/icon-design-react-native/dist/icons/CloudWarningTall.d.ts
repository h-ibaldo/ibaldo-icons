import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudWarningTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudWarningTall: ForwardRefExoticComponent<CloudWarningTallProps & RefAttributes<Svg>>;

export default CloudWarningTall;
export { CloudWarningTall };
