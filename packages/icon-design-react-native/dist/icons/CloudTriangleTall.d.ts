import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudTriangleTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudTriangleTall: ForwardRefExoticComponent<CloudTriangleTallProps & RefAttributes<Svg>>;

export default CloudTriangleTall;
export { CloudTriangleTall };
