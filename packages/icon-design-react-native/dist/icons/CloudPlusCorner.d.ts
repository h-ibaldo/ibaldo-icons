import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudPlusCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudPlusCorner: ForwardRefExoticComponent<CloudPlusCornerProps & RefAttributes<Svg>>;

export default CloudPlusCorner;
export { CloudPlusCorner };
