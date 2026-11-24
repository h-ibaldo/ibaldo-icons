import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitMergeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitMerge: ForwardRefExoticComponent<GitMergeProps & RefAttributes<Svg>>;

export default GitMerge;
export { GitMerge };
