import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareDoubleArrowLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareDoubleArrowLeft: ForwardRefExoticComponent<SquareDoubleArrowLeftProps & RefAttributes<Svg>>;

export default SquareDoubleArrowLeft;
export { SquareDoubleArrowLeft };
