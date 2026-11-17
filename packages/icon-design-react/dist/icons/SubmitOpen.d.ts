import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SubmitOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SubmitOpen: ForwardRefExoticComponent<SubmitOpenProps & RefAttributes<SVGSVGElement>>;

export default SubmitOpen;
export { SubmitOpen };
