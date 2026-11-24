import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileUserDoublePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileUserDoublePlain: ForwardRefExoticComponent<FileUserDoublePlainProps & RefAttributes<Svg>>;

export default FileUserDoublePlain;
export { FileUserDoublePlain };
