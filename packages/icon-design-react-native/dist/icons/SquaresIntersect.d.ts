import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquaresIntersectProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquaresIntersect: ForwardRefExoticComponent<SquaresIntersectProps & RefAttributes<Svg>>;

export default SquaresIntersect;
export { SquaresIntersect };
