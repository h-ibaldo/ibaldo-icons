import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePaperclipPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePaperclipPlain: ForwardRefExoticComponent<FilePaperclipPlainProps & RefAttributes<Svg>>;

export default FilePaperclipPlain;
export { FilePaperclipPlain };
