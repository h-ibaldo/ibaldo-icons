import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileTerminalCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileTerminalCut: ForwardRefExoticComponent<FileTerminalCutProps & RefAttributes<SVGSVGElement>>;

export default FileTerminalCut;
export { FileTerminalCut };
