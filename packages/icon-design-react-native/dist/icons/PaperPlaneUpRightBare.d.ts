import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperPlaneUpRightBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperPlaneUpRightBare: ForwardRefExoticComponent<PaperPlaneUpRightBareProps & RefAttributes<Svg>>;

export default PaperPlaneUpRightBare;
export { PaperPlaneUpRightBare };
