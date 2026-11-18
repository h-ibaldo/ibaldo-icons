import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FileCastProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FileCast: ForwardRefExoticComponent<FileCastProps & RefAttributes<SVGSVGElement>>;

export default FileCast;
export { FileCast };
