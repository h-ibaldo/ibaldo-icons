import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudRefreshCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudRefreshCorner: ForwardRefExoticComponent<CloudRefreshCornerProps & RefAttributes<Svg>>;

export default CloudRefreshCorner;
export { CloudRefreshCorner };
