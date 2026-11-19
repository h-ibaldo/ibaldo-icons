import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquarePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquarePlus: ForwardRefExoticComponent<ChartBarSquarePlusProps & RefAttributes<Svg>>;

export default ChartBarSquarePlus;
export { ChartBarSquarePlus };
