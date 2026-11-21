import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperPlaneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperPlane: ForwardRefExoticComponent<PaperPlaneProps & RefAttributes<Svg>>;

export default PaperPlane;
export { PaperPlane };
