import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FolderFileProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FolderFile: ForwardRefExoticComponent<FolderFileProps & RefAttributes<Svg>>;

export default FolderFile;
export { FolderFile };
