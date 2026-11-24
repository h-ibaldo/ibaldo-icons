import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudPlusTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudPlusTall: ForwardRefExoticComponent<CloudPlusTallProps & RefAttributes<Svg>>;

export default CloudPlusTall;
export { CloudPlusTall };
