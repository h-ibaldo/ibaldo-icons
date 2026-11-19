import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderOpenDownloadCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderOpenDownloadCenter: ForwardRefExoticComponent<FolderOpenDownloadCenterProps & RefAttributes<Svg>>;

export default FolderOpenDownloadCenter;
export { FolderOpenDownloadCenter };
