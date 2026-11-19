import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderOpenTabProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderOpenTab: ForwardRefExoticComponent<FolderOpenTabProps & RefAttributes<Svg>>;

export default FolderOpenTab;
export { FolderOpenTab };
