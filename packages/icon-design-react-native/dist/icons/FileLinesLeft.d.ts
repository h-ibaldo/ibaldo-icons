import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesLeft: ForwardRefExoticComponent<FileLinesLeftProps & RefAttributes<Svg>>;

export default FileLinesLeft;
export { FileLinesLeft };
