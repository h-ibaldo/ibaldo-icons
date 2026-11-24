import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HouseSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HouseSharp: ForwardRefExoticComponent<HouseSharpProps & RefAttributes<Svg>>;

export default HouseSharp;
export { HouseSharp };
