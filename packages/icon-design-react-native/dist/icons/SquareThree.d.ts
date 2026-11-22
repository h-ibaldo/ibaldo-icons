import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareThreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareThree: ForwardRefExoticComponent<SquareThreeProps & RefAttributes<Svg>>;

export default SquareThree;
export { SquareThree };
