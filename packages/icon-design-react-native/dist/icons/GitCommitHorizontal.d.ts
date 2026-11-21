import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitCommitHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitCommitHorizontal: ForwardRefExoticComponent<GitCommitHorizontalProps & RefAttributes<Svg>>;

export default GitCommitHorizontal;
export { GitCommitHorizontal };
