import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudEyeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudEye: ForwardRefExoticComponent<CloudEyeProps & RefAttributes<Svg>>;

export default CloudEye;
export { CloudEye };
