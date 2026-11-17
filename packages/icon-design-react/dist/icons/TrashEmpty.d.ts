import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashEmptyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashEmpty: ForwardRefExoticComponent<TrashEmptyProps & RefAttributes<SVGSVGElement>>;

export default TrashEmpty;
export { TrashEmpty };
