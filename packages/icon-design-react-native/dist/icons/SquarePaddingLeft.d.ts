import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquarePaddingLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquarePaddingLeft: ForwardRefExoticComponent<SquarePaddingLeftProps & RefAttributes<Svg>>;

export default SquarePaddingLeft;
export { SquarePaddingLeft };
