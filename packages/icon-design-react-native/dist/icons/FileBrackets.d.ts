import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileBracketsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileBrackets: ForwardRefExoticComponent<FileBracketsProps & RefAttributes<Svg>>;

export default FileBrackets;
export { FileBrackets };
