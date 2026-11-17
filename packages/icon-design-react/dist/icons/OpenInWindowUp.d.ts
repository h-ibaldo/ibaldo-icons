import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OpenInWindowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OpenInWindowUp: ForwardRefExoticComponent<OpenInWindowUpProps & RefAttributes<SVGSVGElement>>;

export default OpenInWindowUp;
export { OpenInWindowUp };
