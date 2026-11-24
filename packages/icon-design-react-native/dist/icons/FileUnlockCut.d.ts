import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileUnlockCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileUnlockCut: ForwardRefExoticComponent<FileUnlockCutProps & RefAttributes<Svg>>;

export default FileUnlockCut;
export { FileUnlockCut };
