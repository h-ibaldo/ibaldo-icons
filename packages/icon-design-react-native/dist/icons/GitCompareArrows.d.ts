import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GitCompareArrowsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GitCompareArrows: ForwardRefExoticComponent<GitCompareArrowsProps & RefAttributes<Svg>>;

export default GitCompareArrows;
export { GitCompareArrows };
