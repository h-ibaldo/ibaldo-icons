import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSyncBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSyncBoxy: ForwardRefExoticComponent<AtSyncBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtSyncBoxy;
export { AtSyncBoxy };
