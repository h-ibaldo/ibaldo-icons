import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitCompareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitCompare: ForwardRefExoticComponent<GitCompareProps & RefAttributes<Svg>>;

export default GitCompare;
export { GitCompare };
