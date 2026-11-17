import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveHubProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveHub: ForwardRefExoticComponent<SaveHubProps & RefAttributes<SVGSVGElement>>;

export default SaveHub;
export { SaveHub };
