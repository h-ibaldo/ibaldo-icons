import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePaperclipHorizontalPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePaperclipHorizontalPlain: ForwardRefExoticComponent<FilePaperclipHorizontalPlainProps & RefAttributes<Svg>>;

export default FilePaperclipHorizontalPlain;
export { FilePaperclipHorizontalPlain };
