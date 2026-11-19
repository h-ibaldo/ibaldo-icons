import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowSpinnerRaysProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowSpinnerRays: ForwardRefExoticComponent<WindowSpinnerRaysProps & RefAttributes<Svg>>;

export default WindowSpinnerRays;
export { WindowSpinnerRays };
