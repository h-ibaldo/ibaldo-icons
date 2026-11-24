import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileDatabaseCutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileDatabaseCut: ForwardRefExoticComponent<FileDatabaseCutProps & RefAttributes<SVGSVGElement>>;

export default FileDatabaseCut;
export { FileDatabaseCut };
