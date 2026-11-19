import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinesEditProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinesEdit: ForwardRefExoticComponent<FileLinesEditProps & RefAttributes<Svg>>;

export default FileLinesEdit;
export { FileLinesEdit };
