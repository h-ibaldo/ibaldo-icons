import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileArticleCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileArticleCut: ForwardRefExoticComponent<FileArticleCutProps & RefAttributes<SVGSVGElement>>;

export default FileArticleCut;
export { FileArticleCut };
