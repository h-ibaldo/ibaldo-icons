import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Cloud1SadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Cloud1Sad: ForwardRefExoticComponent<Cloud1SadProps & RefAttributes<SVGSVGElement>>;

export default Cloud1Sad;
export { Cloud1Sad };
