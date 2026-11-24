import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LifebuoyDiagonalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LifebuoyDiagonal: ForwardRefExoticComponent<LifebuoyDiagonalProps & RefAttributes<Svg>>;

export default LifebuoyDiagonal;
export { LifebuoyDiagonal };
