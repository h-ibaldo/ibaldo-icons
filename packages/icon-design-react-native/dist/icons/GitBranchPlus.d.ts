import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitBranchPlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitBranchPlus: ForwardRefExoticComponent<GitBranchPlusProps & RefAttributes<Svg>>;

export default GitBranchPlus;
export { GitBranchPlus };
