import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1SendProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Send: ForwardRefExoticComponent<Cloud1SendProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Send;
export { Cloud1Send };
