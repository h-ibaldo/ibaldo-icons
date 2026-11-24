import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePaperclipCutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePaperclipCut: ForwardRefExoticComponent<FilePaperclipCutProps & RefAttributes<Svg>>;

export default FilePaperclipCut;
export { FilePaperclipCut };
