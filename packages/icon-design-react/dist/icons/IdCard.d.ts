import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface IdCardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const IdCard: ForwardRefExoticComponent<IdCardProps & RefAttributes<SVGSVGElement>>;

export default IdCard;
export { IdCard };
