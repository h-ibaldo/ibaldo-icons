import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SpinnerRaysShortProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SpinnerRaysShort: ForwardRefExoticComponent<SpinnerRaysShortProps & RefAttributes<Svg>>;

export default SpinnerRaysShort;
export { SpinnerRaysShort };
