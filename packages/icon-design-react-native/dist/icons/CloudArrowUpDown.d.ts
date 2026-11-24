import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudArrowUpDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudArrowUpDown: ForwardRefExoticComponent<CloudArrowUpDownProps & RefAttributes<Svg>>;

export default CloudArrowUpDown;
export { CloudArrowUpDown };
