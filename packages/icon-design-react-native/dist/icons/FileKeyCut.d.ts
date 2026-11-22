import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileKeyCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileKeyCut: ForwardRefExoticComponent<FileKeyCutProps & RefAttributes<Svg>>;

export default FileKeyCut;
export { FileKeyCut };
