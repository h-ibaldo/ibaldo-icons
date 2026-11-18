import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerFieldProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerField: ForwardRefExoticComponent<PointerFieldProps & RefAttributes<SVGSVGElement>>;

export default PointerField;
export { PointerField };
