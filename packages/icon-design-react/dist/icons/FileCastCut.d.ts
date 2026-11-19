import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCastCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCastCut: ForwardRefExoticComponent<FileCastCutProps & RefAttributes<SVGSVGElement>>;

export default FileCastCut;
export { FileCastCut };
