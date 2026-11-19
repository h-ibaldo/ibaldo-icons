import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileXCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileXCirclePlain: ForwardRefExoticComponent<FileXCirclePlainProps & RefAttributes<Svg>>;

export default FileXCirclePlain;
export { FileXCirclePlain };
