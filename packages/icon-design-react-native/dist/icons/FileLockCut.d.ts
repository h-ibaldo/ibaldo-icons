import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLockCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLockCut: ForwardRefExoticComponent<FileLockCutProps & RefAttributes<Svg>>;

export default FileLockCut;
export { FileLockCut };
