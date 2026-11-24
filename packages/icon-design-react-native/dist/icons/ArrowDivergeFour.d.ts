import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDivergeFourProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDivergeFour: ForwardRefExoticComponent<ArrowDivergeFourProps & RefAttributes<Svg>>;

export default ArrowDivergeFour;
export { ArrowDivergeFour };
