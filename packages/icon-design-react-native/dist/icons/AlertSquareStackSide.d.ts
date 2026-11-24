import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlertSquareStackSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlertSquareStackSide: ForwardRefExoticComponent<AlertSquareStackSideProps & RefAttributes<Svg>>;

export default AlertSquareStackSide;
export { AlertSquareStackSide };
