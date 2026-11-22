import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderLockProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderLock: ForwardRefExoticComponent<FolderLockProps & RefAttributes<Svg>>;

export default FolderLock;
export { FolderLock };
