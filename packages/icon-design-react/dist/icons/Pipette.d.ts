import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PipetteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Pipette: ForwardRefExoticComponent<PipetteProps & RefAttributes<SVGSVGElement>>;

export default Pipette;
export { Pipette };
