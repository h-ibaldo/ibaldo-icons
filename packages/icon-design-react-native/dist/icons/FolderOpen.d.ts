import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderOpen: ForwardRefExoticComponent<FolderOpenProps & RefAttributes<Svg>>;

export default FolderOpen;
export { FolderOpen };
