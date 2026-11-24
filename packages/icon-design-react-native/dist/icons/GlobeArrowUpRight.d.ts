import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GlobeArrowUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GlobeArrowUpRight: ForwardRefExoticComponent<GlobeArrowUpRightProps & RefAttributes<Svg>>;

export default GlobeArrowUpRight;
export { GlobeArrowUpRight };
