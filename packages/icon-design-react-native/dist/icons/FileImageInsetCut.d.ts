import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileImageInsetCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileImageInsetCut: ForwardRefExoticComponent<FileImageInsetCutProps & RefAttributes<Svg>>;

export default FileImageInsetCut;
export { FileImageInsetCut };
