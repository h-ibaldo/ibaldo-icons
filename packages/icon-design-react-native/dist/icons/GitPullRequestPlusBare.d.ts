import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitPullRequestPlusBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitPullRequestPlusBare: ForwardRefExoticComponent<GitPullRequestPlusBareProps & RefAttributes<Svg>>;

export default GitPullRequestPlusBare;
export { GitPullRequestPlusBare };
