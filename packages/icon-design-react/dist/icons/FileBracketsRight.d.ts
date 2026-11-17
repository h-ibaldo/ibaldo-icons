import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileBracketsRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileBracketsRight: ForwardRefExoticComponent<FileBracketsRightProps & RefAttributes<SVGSVGElement>>;

export default FileBracketsRight;
export { FileBracketsRight };
