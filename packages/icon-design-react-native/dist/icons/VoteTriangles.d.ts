import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VoteTrianglesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VoteTriangles: ForwardRefExoticComponent<VoteTrianglesProps & RefAttributes<Svg>>;

export default VoteTriangles;
export { VoteTriangles };
