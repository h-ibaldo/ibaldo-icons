import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMarkSolidOrganicProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMarkSolidOrganic: ForwardRefExoticComponent<CheckMarkSolidOrganicProps & RefAttributes<SVGSVGElement>>;

export default CheckMarkSolidOrganic;
export { CheckMarkSolidOrganic };
