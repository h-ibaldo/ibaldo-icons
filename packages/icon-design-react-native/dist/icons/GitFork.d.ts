import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitForkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitFork: ForwardRefExoticComponent<GitForkProps & RefAttributes<Svg>>;

export default GitFork;
export { GitFork };
