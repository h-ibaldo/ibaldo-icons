import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCyclePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCyclePlus: ForwardRefExoticComponent<ArrowCyclePlusProps & RefAttributes<Svg>>;

export default ArrowCyclePlus;
export { ArrowCyclePlus };
