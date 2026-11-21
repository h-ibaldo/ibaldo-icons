import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitBranchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitBranch: ForwardRefExoticComponent<GitBranchProps & RefAttributes<Svg>>;

export default GitBranch;
export { GitBranch };
