import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperPlaneUpRightNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperPlaneUpRightNotch: ForwardRefExoticComponent<PaperPlaneUpRightNotchProps & RefAttributes<Svg>>;

export default PaperPlaneUpRightNotch;
export { PaperPlaneUpRightNotch };
