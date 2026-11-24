import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquareRowsTwoProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquareRowsTwo: ForwardRefExoticComponent<SquareRowsTwoProps & RefAttributes<Svg>>;

export default SquareRowsTwo;
export { SquareRowsTwo };
