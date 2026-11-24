import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilRulerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilRuler: ForwardRefExoticComponent<PencilRulerProps & RefAttributes<SVGSVGElement>>;

export default PencilRuler;
export { PencilRuler };
