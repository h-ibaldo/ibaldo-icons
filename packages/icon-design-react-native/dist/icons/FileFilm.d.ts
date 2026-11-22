import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileFilmProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileFilm: ForwardRefExoticComponent<FileFilmProps & RefAttributes<Svg>>;

export default FileFilm;
export { FileFilm };
