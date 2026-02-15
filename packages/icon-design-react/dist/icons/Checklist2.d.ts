import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Checklist2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Checklist2: ForwardRefExoticComponent<Checklist2Props & RefAttributes<SVGSVGElement>>;

export default Checklist2;
export { Checklist2 };
