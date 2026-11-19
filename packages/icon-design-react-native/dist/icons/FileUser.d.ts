import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileUserProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileUser: ForwardRefExoticComponent<FileUserProps & RefAttributes<Svg>>;

export default FileUser;
export { FileUser };
