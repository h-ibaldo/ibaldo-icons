import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileEditDetailedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileEditDetailed: ForwardRefExoticComponent<FileEditDetailedProps & RefAttributes<Svg>>;

export default FileEditDetailed;
export { FileEditDetailed };
