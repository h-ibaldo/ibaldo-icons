import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionCushionProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionCushion: ForwardRefExoticComponent<ClosedCaptionCushionProps & RefAttributes<Svg>>;

export default ClosedCaptionCushion;
export { ClosedCaptionCushion };
