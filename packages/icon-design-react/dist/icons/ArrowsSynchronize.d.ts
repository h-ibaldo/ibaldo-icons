import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowsSynchronizeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowsSynchronize: ForwardRefExoticComponent<ArrowsSynchronizeProps & RefAttributes<SVGSVGElement>>;

export default ArrowsSynchronize;
export { ArrowsSynchronize };
