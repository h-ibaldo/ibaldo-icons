import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LifebuoyDiagonalLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LifebuoyDiagonalLong: ForwardRefExoticComponent<LifebuoyDiagonalLongProps & RefAttributes<Svg>>;

export default LifebuoyDiagonalLong;
export { LifebuoyDiagonalLong };
