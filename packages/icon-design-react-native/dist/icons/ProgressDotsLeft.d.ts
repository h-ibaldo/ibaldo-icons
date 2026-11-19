import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ProgressDotsLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ProgressDotsLeft: ForwardRefExoticComponent<ProgressDotsLeftProps & RefAttributes<Svg>>;

export default ProgressDotsLeft;
export { ProgressDotsLeft };
