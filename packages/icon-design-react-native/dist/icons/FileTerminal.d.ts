import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileTerminalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileTerminal: ForwardRefExoticComponent<FileTerminalProps & RefAttributes<Svg>>;

export default FileTerminal;
export { FileTerminal };
