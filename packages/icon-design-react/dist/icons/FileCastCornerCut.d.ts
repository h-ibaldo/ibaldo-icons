import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCastCornerCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCastCornerCut: ForwardRefExoticComponent<FileCastCornerCutProps & RefAttributes<SVGSVGElement>>;

export default FileCastCornerCut;
export { FileCastCornerCut };
