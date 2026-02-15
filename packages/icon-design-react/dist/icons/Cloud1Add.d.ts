import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1AddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Add: ForwardRefExoticComponent<Cloud1AddProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Add;
export { Cloud1Add };
