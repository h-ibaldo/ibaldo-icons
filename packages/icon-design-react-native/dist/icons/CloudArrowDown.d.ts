import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudArrowDown: ForwardRefExoticComponent<CloudArrowDownProps & RefAttributes<Svg>>;

export default CloudArrowDown;
export { CloudArrowDown };
