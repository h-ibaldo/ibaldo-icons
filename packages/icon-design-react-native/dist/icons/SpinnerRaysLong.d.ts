import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SpinnerRaysLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SpinnerRaysLong: ForwardRefExoticComponent<SpinnerRaysLongProps & RefAttributes<Svg>>;

export default SpinnerRaysLong;
export { SpinnerRaysLong };
