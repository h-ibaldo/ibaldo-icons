import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileMinus: ForwardRefExoticComponent<FileMinusProps & RefAttributes<Svg>>;

export default FileMinus;
export { FileMinus };
