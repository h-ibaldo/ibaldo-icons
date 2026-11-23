import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileBrushPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileBrushPlain: ForwardRefExoticComponent<FileBrushPlainProps & RefAttributes<SVGSVGElement>>;

export default FileBrushPlain;
export { FileBrushPlain };
