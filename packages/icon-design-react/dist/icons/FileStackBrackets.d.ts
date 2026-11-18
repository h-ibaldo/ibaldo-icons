import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileStackBracketsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileStackBrackets: ForwardRefExoticComponent<FileStackBracketsProps & RefAttributes<SVGSVGElement>>;

export default FileStackBrackets;
export { FileStackBrackets };
