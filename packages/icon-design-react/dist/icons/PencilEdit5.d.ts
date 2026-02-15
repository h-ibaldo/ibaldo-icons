import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilEdit5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilEdit5: ForwardRefExoticComponent<PencilEdit5Props & RefAttributes<SVGSVGElement>>;

export default PencilEdit5;
export { PencilEdit5 };
