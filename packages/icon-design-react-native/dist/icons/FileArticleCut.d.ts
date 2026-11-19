import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileArticleCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileArticleCut: ForwardRefExoticComponent<FileArticleCutProps & RefAttributes<Svg>>;

export default FileArticleCut;
export { FileArticleCut };
