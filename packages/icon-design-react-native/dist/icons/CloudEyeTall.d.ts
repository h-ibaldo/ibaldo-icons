import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudEyeTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudEyeTall: ForwardRefExoticComponent<CloudEyeTallProps & RefAttributes<Svg>>;

export default CloudEyeTall;
export { CloudEyeTall };
