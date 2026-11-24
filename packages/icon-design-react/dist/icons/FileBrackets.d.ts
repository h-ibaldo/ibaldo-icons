import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileBracketsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileBrackets: ForwardRefExoticComponent<FileBracketsProps & RefAttributes<SVGSVGElement>>;

export default FileBrackets;
export { FileBrackets };
