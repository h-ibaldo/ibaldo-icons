import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckBoldOrganicProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckBoldOrganic: ForwardRefExoticComponent<CheckBoldOrganicProps & RefAttributes<SVGSVGElement>>;

export default CheckBoldOrganic;
export { CheckBoldOrganic };
