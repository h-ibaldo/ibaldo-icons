import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSquareTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSquareTall: ForwardRefExoticComponent<CloudSquareTallProps & RefAttributes<Svg>>;

export default CloudSquareTall;
export { CloudSquareTall };
