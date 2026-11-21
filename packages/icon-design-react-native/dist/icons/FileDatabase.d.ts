import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileDatabaseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileDatabase: ForwardRefExoticComponent<FileDatabaseProps & RefAttributes<Svg>>;

export default FileDatabase;
export { FileDatabase };
