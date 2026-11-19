import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudRefreshProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudRefresh: ForwardRefExoticComponent<CloudRefreshProps & RefAttributes<Svg>>;

export default CloudRefresh;
export { CloudRefresh };
