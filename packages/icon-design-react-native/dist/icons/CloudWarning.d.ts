import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudWarningProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudWarning: ForwardRefExoticComponent<CloudWarningProps & RefAttributes<Svg>>;

export default CloudWarning;
export { CloudWarning };
