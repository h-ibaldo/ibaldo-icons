import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileStackLinkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileStackLink: ForwardRefExoticComponent<FileStackLinkProps & RefAttributes<Svg>>;

export default FileStackLink;
export { FileStackLink };
