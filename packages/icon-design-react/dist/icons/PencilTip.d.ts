import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PencilTipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PencilTip: ForwardRefExoticComponent<PencilTipProps & RefAttributes<SVGSVGElement>>;

export default PencilTip;
export { PencilTip };
