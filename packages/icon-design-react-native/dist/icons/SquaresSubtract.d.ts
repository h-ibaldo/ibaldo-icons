import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquaresSubtractProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquaresSubtract: ForwardRefExoticComponent<SquaresSubtractProps & RefAttributes<Svg>>;

export default SquaresSubtract;
export { SquaresSubtract };
