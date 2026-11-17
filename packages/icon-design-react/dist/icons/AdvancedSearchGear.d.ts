import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AdvancedSearchGearProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AdvancedSearchGear: ForwardRefExoticComponent<AdvancedSearchGearProps & RefAttributes<SVGSVGElement>>;

export default AdvancedSearchGear;
export { AdvancedSearchGear };
