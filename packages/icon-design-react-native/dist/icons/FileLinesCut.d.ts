import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesCut: ForwardRefExoticComponent<FileLinesCutProps & RefAttributes<Svg>>;

export default FileLinesCut;
export { FileLinesCut };
