import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveSearchMagnifyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveSearchMagnify: ForwardRefExoticComponent<SaveSearchMagnifyProps & RefAttributes<SVGSVGElement>>;

export default SaveSearchMagnify;
export { SaveSearchMagnify };
