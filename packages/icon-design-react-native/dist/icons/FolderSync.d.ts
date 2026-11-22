import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderSyncProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderSync: ForwardRefExoticComponent<FolderSyncProps & RefAttributes<Svg>>;

export default FolderSync;
export { FolderSync };
