import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileXCircle: ForwardRefExoticComponent<FileXCircleProps & RefAttributes<Svg>>;

export default FileXCircle;
export { FileXCircle };
