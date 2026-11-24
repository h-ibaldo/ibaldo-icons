import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileTerminalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileTerminal: ForwardRefExoticComponent<FileTerminalProps & RefAttributes<SVGSVGElement>>;

export default FileTerminal;
export { FileTerminal };
