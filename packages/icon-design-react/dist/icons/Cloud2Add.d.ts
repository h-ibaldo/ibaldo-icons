import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud2AddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud2Add: ForwardRefExoticComponent<Cloud2AddProps & RefAttributes<SVGSVGElement>>;

export default Cloud2Add;
export { Cloud2Add };
