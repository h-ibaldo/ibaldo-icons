import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TagStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TagStack: ForwardRefExoticComponent<TagStackProps & RefAttributes<SVGSVGElement>>;

export default TagStack;
export { TagStack };
