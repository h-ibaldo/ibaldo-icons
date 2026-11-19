import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudArrowUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudArrowUp: ForwardRefExoticComponent<CloudArrowUpProps & RefAttributes<Svg>>;

export default CloudArrowUp;
export { CloudArrowUp };
