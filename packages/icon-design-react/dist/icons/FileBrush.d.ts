import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileBrushProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileBrush: ForwardRefExoticComponent<FileBrushProps & RefAttributes<SVGSVGElement>>;

export default FileBrush;
export { FileBrush };
