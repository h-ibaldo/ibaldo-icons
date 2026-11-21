import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitPullRequestClosedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitPullRequestClosed: ForwardRefExoticComponent<GitPullRequestClosedProps & RefAttributes<Svg>>;

export default GitPullRequestClosed;
export { GitPullRequestClosed };
