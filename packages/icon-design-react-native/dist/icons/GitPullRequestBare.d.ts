import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitPullRequestBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitPullRequestBare: ForwardRefExoticComponent<GitPullRequestBareProps & RefAttributes<Svg>>;

export default GitPullRequestBare;
export { GitPullRequestBare };
