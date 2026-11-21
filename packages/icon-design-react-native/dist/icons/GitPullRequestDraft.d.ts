import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitPullRequestDraftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitPullRequestDraft: ForwardRefExoticComponent<GitPullRequestDraftProps & RefAttributes<Svg>>;

export default GitPullRequestDraft;
export { GitPullRequestDraft };
