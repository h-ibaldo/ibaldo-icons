import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderTreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderTree: ForwardRefExoticComponent<FolderTreeProps & RefAttributes<Svg>>;

export default FolderTree;
export { FolderTree };
