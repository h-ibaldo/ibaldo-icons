import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitCommitProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitCommit: ForwardRefExoticComponent<GitCommitProps & RefAttributes<Svg>>;

export default GitCommit;
export { GitCommit };
