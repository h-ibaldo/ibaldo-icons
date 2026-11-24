import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperPlaneUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperPlaneUpRight: ForwardRefExoticComponent<PaperPlaneUpRightProps & RefAttributes<Svg>>;

export default PaperPlaneUpRight;
export { PaperPlaneUpRight };
