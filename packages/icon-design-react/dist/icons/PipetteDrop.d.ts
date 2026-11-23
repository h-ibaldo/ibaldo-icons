import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PipetteDropProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PipetteDrop: ForwardRefExoticComponent<PipetteDropProps & RefAttributes<SVGSVGElement>>;

export default PipetteDrop;
export { PipetteDrop };
