import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDivergeSixProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDivergeSix: ForwardRefExoticComponent<ArrowDivergeSixProps & RefAttributes<Svg>>;

export default ArrowDivergeSix;
export { ArrowDivergeSix };
