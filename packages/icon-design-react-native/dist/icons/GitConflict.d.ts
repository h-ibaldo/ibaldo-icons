import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitConflictProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitConflict: ForwardRefExoticComponent<GitConflictProps & RefAttributes<Svg>>;

export default GitConflict;
export { GitConflict };
