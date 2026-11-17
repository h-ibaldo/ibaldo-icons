import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Window: ForwardRefExoticComponent<WindowProps & RefAttributes<SVGSVGElement>>;

export default Window;
export { Window };
