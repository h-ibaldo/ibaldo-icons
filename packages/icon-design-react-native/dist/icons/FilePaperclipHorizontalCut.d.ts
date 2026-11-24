import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePaperclipHorizontalCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePaperclipHorizontalCut: ForwardRefExoticComponent<FilePaperclipHorizontalCutProps & RefAttributes<Svg>>;

export default FilePaperclipHorizontalCut;
export { FilePaperclipHorizontalCut };
