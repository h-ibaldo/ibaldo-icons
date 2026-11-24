import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RestoreSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RestoreSquare: ForwardRefExoticComponent<RestoreSquareProps & RefAttributes<Svg>>;

export default RestoreSquare;
export { RestoreSquare };
