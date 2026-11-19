import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClosedCaptionBoxyProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClosedCaptionBoxy: ForwardRefExoticComponent<ClosedCaptionBoxyProps & RefAttributes<Svg>>;

export default ClosedCaptionBoxy;
export { ClosedCaptionBoxy };
