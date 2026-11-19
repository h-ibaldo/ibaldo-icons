import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SubmitSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SubmitSquare: ForwardRefExoticComponent<SubmitSquareProps & RefAttributes<Svg>>;

export default SubmitSquare;
export { SubmitSquare };
