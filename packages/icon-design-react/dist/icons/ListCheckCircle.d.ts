import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ListCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ListCheckCircle: ForwardRefExoticComponent<ListCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default ListCheckCircle;
export { ListCheckCircle };
