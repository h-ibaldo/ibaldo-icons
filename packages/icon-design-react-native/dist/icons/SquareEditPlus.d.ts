import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareEditPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareEditPlus: ForwardRefExoticComponent<SquareEditPlusProps & RefAttributes<Svg>>;

export default SquareEditPlus;
export { SquareEditPlus };
