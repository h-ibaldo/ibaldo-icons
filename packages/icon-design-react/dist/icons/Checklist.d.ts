import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChecklistProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Checklist: ForwardRefExoticComponent<ChecklistProps & RefAttributes<SVGSVGElement>>;

export default Checklist;
export { Checklist };
