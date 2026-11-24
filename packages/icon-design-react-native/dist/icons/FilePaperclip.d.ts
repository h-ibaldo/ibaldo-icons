import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePaperclipProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePaperclip: ForwardRefExoticComponent<FilePaperclipProps & RefAttributes<Svg>>;

export default FilePaperclip;
export { FilePaperclip };
