import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileBrushCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileBrushCut: ForwardRefExoticComponent<FileBrushCutProps & RefAttributes<SVGSVGElement>>;

export default FileBrushCut;
export { FileBrushCut };
