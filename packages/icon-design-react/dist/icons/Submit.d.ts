import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SubmitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Submit: ForwardRefExoticComponent<SubmitProps & RefAttributes<SVGSVGElement>>;

export default Submit;
export { Submit };
