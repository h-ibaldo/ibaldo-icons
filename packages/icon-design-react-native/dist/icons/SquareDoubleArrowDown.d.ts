import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareDoubleArrowDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareDoubleArrowDown: ForwardRefExoticComponent<SquareDoubleArrowDownProps & RefAttributes<Svg>>;

export default SquareDoubleArrowDown;
export { SquareDoubleArrowDown };
