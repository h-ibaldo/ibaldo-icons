import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareSparklePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareSparklePlus: ForwardRefExoticComponent<SquareSparklePlusProps & RefAttributes<Svg>>;

export default SquareSparklePlus;
export { SquareSparklePlus };
