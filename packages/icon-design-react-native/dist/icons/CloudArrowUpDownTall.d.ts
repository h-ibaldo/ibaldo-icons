import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudArrowUpDownTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudArrowUpDownTall: ForwardRefExoticComponent<CloudArrowUpDownTallProps & RefAttributes<Svg>>;

export default CloudArrowUpDownTall;
export { CloudArrowUpDownTall };
