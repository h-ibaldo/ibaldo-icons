import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSearch2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSearch2: ForwardRefExoticComponent<CloudSearch2Props & RefAttributes<Svg>>;

export default CloudSearch2;
export { CloudSearch2 };
