import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SupportFaceProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SupportFace: ForwardRefExoticComponent<SupportFaceProps & RefAttributes<Svg>>;

export default SupportFace;
export { SupportFace };
