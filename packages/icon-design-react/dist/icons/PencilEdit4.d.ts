import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilEdit4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilEdit4: ForwardRefExoticComponent<PencilEdit4Props & RefAttributes<SVGSVGElement>>;

export default PencilEdit4;
export { PencilEdit4 };
