import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareDoubleArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareDoubleArrowRight: ForwardRefExoticComponent<SquareDoubleArrowRightProps & RefAttributes<Svg>>;

export default SquareDoubleArrowRight;
export { SquareDoubleArrowRight };
