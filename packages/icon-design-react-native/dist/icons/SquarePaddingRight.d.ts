import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquarePaddingRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquarePaddingRight: ForwardRefExoticComponent<SquarePaddingRightProps & RefAttributes<Svg>>;

export default SquarePaddingRight;
export { SquarePaddingRight };
