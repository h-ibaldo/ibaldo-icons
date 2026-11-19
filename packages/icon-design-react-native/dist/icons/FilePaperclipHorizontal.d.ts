import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePaperclipHorizontalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePaperclipHorizontal: ForwardRefExoticComponent<FilePaperclipHorizontalProps & RefAttributes<Svg>>;

export default FilePaperclipHorizontal;
export { FilePaperclipHorizontal };
