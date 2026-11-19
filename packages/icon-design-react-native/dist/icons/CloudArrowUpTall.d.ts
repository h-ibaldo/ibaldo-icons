import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudArrowUpTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudArrowUpTall: ForwardRefExoticComponent<CloudArrowUpTallProps & RefAttributes<Svg>>;

export default CloudArrowUpTall;
export { CloudArrowUpTall };
