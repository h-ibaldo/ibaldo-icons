import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitMergeBendProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitMergeBend: ForwardRefExoticComponent<GitMergeBendProps & RefAttributes<Svg>>;

export default GitMergeBend;
export { GitMergeBend };
