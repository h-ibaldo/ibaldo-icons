import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearStackSpikyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearStackSpiky: ForwardRefExoticComponent<GearStackSpikyProps & RefAttributes<SVGSVGElement>>;

export default GearStackSpiky;
export { GearStackSpiky };
