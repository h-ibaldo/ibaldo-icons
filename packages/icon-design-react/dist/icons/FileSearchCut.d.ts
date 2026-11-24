import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileSearchCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileSearchCut: ForwardRefExoticComponent<FileSearchCutProps & RefAttributes<SVGSVGElement>>;

export default FileSearchCut;
export { FileSearchCut };
