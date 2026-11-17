import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudViewProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudView: ForwardRefExoticComponent<CloudViewProps & RefAttributes<SVGSVGElement>>;

export default CloudView;
export { CloudView };
