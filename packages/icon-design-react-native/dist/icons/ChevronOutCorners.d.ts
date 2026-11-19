import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronOutCornersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronOutCorners: ForwardRefExoticComponent<ChevronOutCornersProps & RefAttributes<Svg>>;

export default ChevronOutCorners;
export { ChevronOutCorners };
