import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudPlus: ForwardRefExoticComponent<CloudPlusProps & RefAttributes<Svg>>;

export default CloudPlus;
export { CloudPlus };
