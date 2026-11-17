import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkCircleArrowLeftSlantedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkCircleArrowLeftSlanted: ForwardRefExoticComponent<LinkCircleArrowLeftSlantedProps & RefAttributes<SVGSVGElement>>;

export default LinkCircleArrowLeftSlanted;
export { LinkCircleArrowLeftSlanted };
