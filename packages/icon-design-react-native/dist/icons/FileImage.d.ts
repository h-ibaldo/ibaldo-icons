import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileImageProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileImage: ForwardRefExoticComponent<FileImageProps & RefAttributes<Svg>>;

export default FileImage;
export { FileImage };
