import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudCodeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudCode: ForwardRefExoticComponent<CloudCodeProps & RefAttributes<Svg>>;

export default CloudCode;
export { CloudCode };
