import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderOpenDownloadProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderOpenDownload: ForwardRefExoticComponent<FolderOpenDownloadProps & RefAttributes<Svg>>;

export default FolderOpenDownload;
export { FolderOpenDownload };
