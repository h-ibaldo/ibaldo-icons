import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperPlaneNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperPlaneNotch: ForwardRefExoticComponent<PaperPlaneNotchProps & RefAttributes<Svg>>;

export default PaperPlaneNotch;
export { PaperPlaneNotch };
