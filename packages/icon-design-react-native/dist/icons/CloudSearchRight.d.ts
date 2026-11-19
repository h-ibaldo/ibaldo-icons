import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSearchRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSearchRight: ForwardRefExoticComponent<CloudSearchRightProps & RefAttributes<Svg>>;

export default CloudSearchRight;
export { CloudSearchRight };
