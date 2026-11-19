import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownArcSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownArcSmall: ForwardRefExoticComponent<ArrowDownArcSmallProps & RefAttributes<Svg>>;

export default ArrowDownArcSmall;
export { ArrowDownArcSmall };
