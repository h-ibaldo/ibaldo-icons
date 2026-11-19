import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudMailProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudMail: ForwardRefExoticComponent<CloudMailProps & RefAttributes<Svg>>;

export default CloudMail;
export { CloudMail };
