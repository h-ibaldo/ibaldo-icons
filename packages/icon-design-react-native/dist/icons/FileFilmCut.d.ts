import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileFilmCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileFilmCut: ForwardRefExoticComponent<FileFilmCutProps & RefAttributes<Svg>>;

export default FileFilmCut;
export { FileFilmCut };
