import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckSquareNestedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckSquareNested: ForwardRefExoticComponent<CheckSquareNestedProps & RefAttributes<Svg>>;

export default CheckSquareNested;
export { CheckSquareNested };
