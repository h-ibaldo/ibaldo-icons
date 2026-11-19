import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderInnerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderInner: ForwardRefExoticComponent<FolderInnerProps & RefAttributes<Svg>>;

export default FolderInner;
export { FolderInner };
