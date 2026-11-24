import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileSyncCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileSyncCut: ForwardRefExoticComponent<FileSyncCutProps & RefAttributes<Svg>>;

export default FileSyncCut;
export { FileSyncCut };
