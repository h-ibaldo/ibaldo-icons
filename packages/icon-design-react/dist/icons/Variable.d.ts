import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VariableProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Variable: ForwardRefExoticComponent<VariableProps & RefAttributes<SVGSVGElement>>;

export default Variable;
export { Variable };
