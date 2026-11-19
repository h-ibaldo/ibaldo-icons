import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SpinnerSplitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SpinnerSplit: ForwardRefExoticComponent<SpinnerSplitProps & RefAttributes<Svg>>;

export default SpinnerSplit;
export { SpinnerSplit };
