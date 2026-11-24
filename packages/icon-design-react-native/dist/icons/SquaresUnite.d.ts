import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquaresUniteProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquaresUnite: ForwardRefExoticComponent<SquaresUniteProps & RefAttributes<Svg>>;

export default SquaresUnite;
export { SquaresUnite };
